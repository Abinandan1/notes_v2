import bcrypt from "bcryptjs";
import crypto from "crypto";
export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
export const hashPasswordCrypto = (password) =>
  crypto.createHash("md5").update(password).digest("hex");

export const comparePasswords = async (password, hashedPassword) => {
  const passwordsMatch = await bcrypt.compare(password, hashedPassword);
  return passwordsMatch;
};
