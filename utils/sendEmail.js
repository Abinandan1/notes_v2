import nodemailer from "nodemailer";
export const sendEmail = async ({ from, to, subject, text, html }) => {
  const transporter = nodemailer.createTransport({
    // If pooling is used then Nodemailer keeps a fixed amount of connections open and sends the next message once a connection becomes available. It is mostly useful when you have a large number of messages that you want to send in batches or your provider allows you to only use a small amount of parallel connections.
    pool: true,
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    tls: {
      servername: "smtp.gmail.com",
    },
    auth: {
      user: process.env.OAUTH_EMAIL,
      pass: process.env.OAUTH_PASSWORD,
    },
  });
  const mailOptions = {
    from: from || "abinandan2018@gmail.com",
    to: [to],
    subject,
    html,
  };

  return transporter.sendMail(mailOptions);
};
