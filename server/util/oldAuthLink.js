const nodemailer = require("nodemailer");
const { google } = require("googleapis");

async function sendAuthLink(message) {
	const clientId = "";
	const clientSecret = "";
	const refreshToken = "";
	
	const OAuth2 = google.auth.OAuth2;
	
	const OAuth2_client = new OAuth2(clientId, clientSecret, "https://developers.google.com/oauthplayground");
	
	OAuth2_client.setCredentials({ refresh_token: refreshToken });
	
	const accessToken = await new Promise((resolve, reject) => {
		OAuth2_client.getAccessToken((err, token) => {
			if (err) {
				console.log("*ERR: ", err)
				reject();
			}
			resolve(token); 
		});
	});
	
	console.log(accessToken);
	
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			type: 'OAuth2',
			user: 'user@gmail.com',
			clientId: clientId,
			clientSecret: clientSecret,
			refreshToken: refreshToken,
			accessToken: accessToken
		},
	});
	
	try {
		const info = await transporter.sendMail(message);
		console.log("success");
	} catch (error) {
		throw new Error(error);
	}
}

module.exports = sendAuthLink;
