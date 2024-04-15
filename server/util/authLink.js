const nodemailer = require("nodemailer");
const keys = require("../config/keys");

async function sendAuthLink(message) {
	const transporter = nodemailer.createTransport({
		host: "live.smtp.mailtrap.io",
		port: 587,
		auth: {
		  user: "api",
		  pass: keys.mailtrap.PASSWORD
		}
	  });
	
	try {
		const info = await transporter.sendMail(message);
		console.log("success");
	} catch (error) {
		throw new Error(error);
	}
}

module.exports = sendAuthLink;