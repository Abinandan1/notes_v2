export const randomOTPGenerator = () => {
  const otp = Math.floor(Math.random() * 1000000);
  return otp;
};
