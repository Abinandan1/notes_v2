import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};

export const verifyToken = (token) => {
  const isVerified = jwt.verify(token, process.env.JWT_SECRET);
  return isVerified;
};

export const attachTokenToCookies = async ({
  res,
  tokenUserPayload,
  refreshToken,
}) => {
  const accessTokenJWT = generateToken({
    ...tokenUserPayload,
  });
  const refreshTokenJWT = generateToken({
    ...tokenUserPayload,
    refreshToken,
  });
  const refreshTokenExpiration = 1000 * 60 * 60 * 24; //1 DAY
  const accessTokenExpiration = 1000 * 60 * 15; //15 MINS
  // SEND TOKEN VIA COOKIES
  res.cookie("accessToken", accessTokenJWT, {
    httpOnly: true,
    expires: new Date(Date.now() + accessTokenExpiration),
    secure: process.env.NODE_ENV === "production",
    signed: true,
  });
  res.cookie("refreshToken", refreshTokenJWT, {
    httpOnly: true,
    expires: new Date(Date.now() + refreshTokenExpiration),
    secure: process.env.NODE_ENV === "production",
    signed: true,
  });
};
