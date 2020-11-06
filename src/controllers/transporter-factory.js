// import nodemailer from "nodemailer";
const nodemailer = require("nodemailer");

function createTransporter(crendentials = null){
  const options = {
    service: "gmail",
    port: 465,
    secure: true,
    auth: crendentials || {
      user: "gestion.queja.reclamo@gmail.com",
      pass: "mina123456",
    },
  };
  let transporter = nodemailer.createTransport(options);
  return transporter;
}

const Email = {};

Email.sendEmail = async function(messageObj){
  try {
    
    const transporter = createTransporter();
    await transporter.sendMail(messageObj);
    
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = Email;