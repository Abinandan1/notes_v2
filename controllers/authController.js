import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  UnauthenticatedError,
} from "../errors/customError.js";
import userModel from "../models/userModel.js";
import {
  comparePasswords,
  hashPassword,
  hashPasswordCrypto,
} from "../utils/passwordUtils.js";
import { attachTokenToCookies } from "../utils/tokenUtils.js";
import crypto from "crypto";
import { sendVerificationEmail } from "../utils/sendVerificationEmail.js";
import Token from "../models/Token.js";
import { sendResetPasswordEmail } from "../utils/sendResetPasswordEmail.js";

export const login = async (req, res) => {
  const user = await userModel.findOne({ email: req.body.email });
  // IS USER VALID?
  const isUserValid =
    user && (await comparePasswords(req.body.password, user.password));
  if (!isUserValid) throw new BadRequestError(`invalid credentials`);
  // IS EMAIL VERIFIED?
  if (!user?.isVerified)
    throw new UnauthenticatedError("please verify your email");
  // CREATE TOKEN PAYLOAD
  const tokenUserPayload = { userId: user._id, role: user.role };
  // CREATE REFRESH TOKEN
  let refreshToken = "";
  // CHECK FOR EXISTING TOKEN
  const existingToken = await Token.findOne({ user: user._id });
  if (existingToken) {
    const { isValid } = existingToken;
    if (!isValid) throw new UnauthenticatedError("invalid credentials");
    refreshToken = existingToken.refreshToken;
    attachTokenToCookies({ res, tokenUserPayload, refreshToken });
    res
      .status(StatusCodes.OK)
      .json({ msg: "login successful", user: tokenUserPayload });
    return;
  }
  refreshToken = crypto.randomBytes(40).toString("hex");
  const userAgent = req.headers["user-agent"];
  const ip = req.ip;
  const userToken = { refreshToken, ip, userAgent, user: user._id };
  await Token.create(userToken);
  attachTokenToCookies({ res, tokenUserPayload, refreshToken });
  res
    .status(StatusCodes.OK)
    .json({ msg: "login successful", user: tokenUserPayload });
};
export const register = async (req, res) => {
  const userCount = await userModel.countDocuments();
  // FIRST USER IS ADMIN
  if (userCount === 0) {
    req.body.role = "admin";
  }
  // HASH PASSWORD
  req.body.password = await hashPassword(req.body.password);
  // SET VERIFICATION TOKEN
  const verificationToken = crypto.randomBytes(40).toString("hex");
  req.body.verificationToken = verificationToken;
  const user = await userModel.create(req.body);
  await sendVerificationEmail({
    name: user.name,
    email: user.email,
    verificationToken: user.verificationToken,
    origin: "https://notes-v2.onrender.com/",
  });
  res.status(StatusCodes.CREATED).json({
    msg: "success! please check your email to verify account",
  });
};
export const verifyEmail = async (req, res) => {
  const { verificationToken, email } = req.body;
  const user = await userModel.findOne({ email });
  // 401 - IF INVALID EMAIL || INVALID VERIFICATION TOKEN
  if (!user || verificationToken !== user.verificationToken)
    throw new UnauthenticatedError("verification failed");
  // IF ALL ARE CORRECT - VERIFY USER
  user.isVerified = true;
  user.verified = Date.now();
  user.verificationToken = "";
  // SAVE USER USING INSTANCE METHOD SAVE
  await user.save();
  res.status(StatusCodes.OK).json({ msg: "email verified" });
};
export const logout = async (req, res) => {
  // REMOVE TOKEN FROM COOKIES
  await Token.findOneAndDelete({ user: req.user.userId });
  res.cookie("accessToken", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.cookie("refreshToken", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out" });
};
export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await userModel.findOne({ email });
  if (!email) throw new BadRequestError("Please provide valid email");
  if (user) {
    user.passwordToken = hashPasswordCrypto(
      crypto.randomBytes(70).toString("hex")
    );
    // send email
    user.passwordTokenExpirationDate = new Date(Date.now() + 1000 * 60 * 10);
    await user.save();
    sendResetPasswordEmail({
      name: user.name,
      email: user.email,
      passwordToken: user.passwordToken,
      origin: "https://notes-v2.onrender.com/",
    });
  }
  res
    .status(StatusCodes.OK)
    .json({ msg: "Please check you email for reset password link" });
};
export const resetPassword = async (req, res) => {
  const { token, password, email } = req.body;
  if (!token || !email || !password)
    throw new BadRequestError("Please provide all values");
  const user = await userModel.findOne({ email });
  if (user) {
    const currentDate = new Date();
    if (
      user.passwordToken === token &&
      user.passwordTokenExpirationDate > currentDate
    ) {
      user.password = await hashPassword(password);
      user.passwordToken = null;
      user.passwordTokenExpirationDate = null;
      await user.save();
    }
  }
  res.status(StatusCodes.OK).json({ msg: "password changed" });
};
