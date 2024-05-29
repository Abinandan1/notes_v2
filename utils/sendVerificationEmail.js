import { sendEmail } from "./sendEmail.js";

export const sendVerificationEmail = async ({
  name,
  email,
  verificationToken,
  origin,
}) => {
  const verifyEmail = `${origin}user/verify-email?token=${verificationToken}&email=${email}`;
  const message = `<p>please verify your email using the below link : <a href="${verifyEmail}">Verify Email</a></p>`;
  return sendEmail({
    to: email,
    subject: "Email Verification",
    html: `<h4>Hello, ${name}</h4>
    ${message}
    `,
  });
};
