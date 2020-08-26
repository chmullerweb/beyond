const express = require ('express')
const passport = require ('passport')
const request = require('request');
const controllers = require('./constrollers')
const { check, validationResult } = require(' express-validator')
const nodemailer = require ('nodemailer');

//Create express Router
const router = express.Router()
router.get('/', constrollers)

// Create app express
const app = express()

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost'; 
var port = 3000; 

app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n"); 
});
