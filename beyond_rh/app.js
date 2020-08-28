const express = require ('express');
const path = require ('path');
const bodyParser = require ('body-parser');
const passport = require ('passport');
const request = require('request');
const nodemailer = require ('nodemailer');
const { getMaxListeners } = require('process');
require('dotenv').config();

//Create express Router
const router = express.Router()
//router.get('/', controllers)

// Create app express
const app = express()

// Static folder - cette ligne sera utile après npm run build - quand app compilée
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// // Récupère ma requête axios.post de Vue
app.post('/submit', (req, res) => {

let transporter = nodemailer.createTransport({
	service: 'gmail',
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD
	}
});

let mailOptions = {
	from: `${req.body.inputEmail}`,
	to: process.env.EMAIL,
	subject: 'Message du Formulaire de Contact - Beyond',
	html: 
	`<h3>Message envoyé par :</h3>
	<ul>
		<li>Nom : ${req.body.inputName}</li>
		<li>Prénom : ${req.body.inputFirstname}</li>
		<li>Téléphone : ${req.body.inputPhone}</li>
		<li>Email : ${req.body.inputEmail}</li>
		<li>Status : ${req.body.inputStatus}</li>
		<li>Autre Poste : ${req.body.inputJobDetails}</li>
	</ul>
	<h3>Contenu du message :</h3>
	<p>${req.body.textareaMsg}</p>
	` 
};

transporter.sendMail(mailOptions, function(err, data) {
	if(err) {
		console.log('error occurs:', err);
	} else {
		console.log('Email sent');
	}
});

//res.send('submit', {successMsg:'Votre Email a bien été envoyé'})

});     


// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost'; 
var port = 3000; 

app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n"); 
});
