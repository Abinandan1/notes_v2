import { sendEmail } from "./sendEmail.js";

export const sendResetPasswordEmail = async ({
  name,
  email,
  passwordToken,
  origin,
}) => {
  const resetPassword = `${origin}user/reset-password?token=${passwordToken}&email=${email}`;
  const message = `<p>please reset your password using the below link : <a href="${resetPassword}">Reset Password</a></p>`;
  return sendEmail({
    to: email,
    subject: "Reset Password",
    html: `<h4>Hello, ${name}</h4>
    ${message}
    `,
  });
};
