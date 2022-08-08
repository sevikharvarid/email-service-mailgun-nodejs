var api_key = 'b01db87f247163d9a65a777606e1f385-1b3a03f6-b197984a';
var domain = 'sandbox74217c0d3d4a4499a761a95f80e7a54b.mailgun.org';


const mailgun = require("mailgun-js");
const DOMAIN = domain;
const mg = mailgun({apiKey: api_key, domain: DOMAIN});
const data = {
	from: 'sevikhar2@gmail.com',
	to: ['gilanggsb@gmail.com','sevikhar@gmail.com'],
	subject: 'Hello',
	text: 'Testing kirim email!',
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});