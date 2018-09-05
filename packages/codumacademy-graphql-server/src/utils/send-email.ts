import * as sgMail from "@sendgrid/mail";

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const send = (to, from, subject, html) => {
  const opts = {
    to,
    from,
    subject,
    html
  };
  return sgMail.send(opts);
};

export default send;
