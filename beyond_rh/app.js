const express = require ('express');
const path = require ('path');
const bodyParser = require ('body-parser');
const passport = require ('passport');
const request = require('request');
const nodemailer = require ('nodemailer');

//Create express Router
const router = express.Router()
//router.get('/', controllers)

// Create app express
const app = express()

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Récupère ma requête axios.post de Vue
app.get('/contact', (req, res) => {
	console.log('lala')
	console.log(req.body)
})

// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost'; 
var port = 3000; 

app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n"); 
});


