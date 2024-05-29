export const nodemailerConfig = {
  apiKey: process.env.MAILGUN_API_KEY,
  // domain: "sandbox-123.mailgun.org",
  domain: process.env.MAILGUN_DOMAIN,
};
