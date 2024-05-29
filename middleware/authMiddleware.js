import {
  UnauthenticatedError,
  UnauthorizedError,
} from "../errors/customError.js";
import Token from "../models/Token.js";
import { attachTokenToCookies, verifyToken } from "../utils/tokenUtils.js";

export const authenticateUser = async (req, res, next) => {
  const { accessToken, refreshToken: reqRefreshToken } = req.signedCookies;
  try {
    if (accessToken) {
      const tokenUserPayload = verifyToken(accessToken);
      req.user = tokenUserPayload;
      return next();
    }
    const tokenUserPayload = verifyToken(reqRefreshToken);
    const { userId, role, refreshToken } = tokenUserPayload;
    const existingToken = await Token.findOne({
      user: userId,
      refreshToken: refreshToken,
    });
    if (!existingToken || !existingToken?.isValid)
      throw new UnauthenticatedError("authentication invalid");
    attachTokenToCookies({
      res,
      tokenUserPayload: { userId, role },
      refreshToken: existingToken.refreshToken,
    });
    req.user = { userId, role };
    next();
  } catch (error) {
    throw new UnauthenticatedError("authentication invalid");
  }
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      throw new UnauthorizedError("Unauthorized to access this route");
    next();
  };
};
