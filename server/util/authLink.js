const nodemailer = require("nodemailer");
const keys = require("../config/keys");

async function sendAuthLink(message) {
	// const clientId = "966004257988-njq8ipuib0dgst6ia2lvi9ehpugd4ks9.apps.googleusercontent.com";
	// const clientSecret = ***REMOVED***;
	// const refreshToken = "1//04a85TPC2UW0CCgYIARAAGAQSNwF-L9IrK7zpIh6VsycVsL5JzD4L8h_5Bv3PJac5oqBV_UQW6goutEIORRPQE_95WYXmn91j2JE";
	
	// const OAuth2 = google.auth.OAuth2;
	
	// const OAuth2_client = new OAuth2(clientId, clientSecret, "https://developers.google.com/oauthplayground");
	
	// OAuth2_client.setCredentials({ refresh_token: refreshToken });
	
	// const accessToken = await new Promise((resolve, reject) => {
	// 	OAuth2_client.getAccessToken((err, token) => {
	// 		if (err) {
	// 			console.log("*ERR: ", err)
	// 			reject();
	// 		}
	// 		resolve(token); 
	// 	});
	// });
	
	// const transporter = nodemailer.createTransport({
	// 	service: 'gmail',
	// 	auth: {
	// 		type: 'OAuth2',
	// 		user: 'nyitfamily@gmail.com',
	// 		clientId: clientId,
	// 		clientSecret: clientSecret,
	// 		refreshToken: refreshToken,
	// 		accessToken: accessToken
	// 	},
	// });

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