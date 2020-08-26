//L'application requiert l'utilisation du module Express.
//La variable express nous permettra d'utiliser les fonctionnalités du module Express.  
var express = require('express'); 
const path = require('path')
// Nous créons un objet de type Express. 
var app = express(); 


//Utilisation du module body-parser pour analyser les données envoyées via la méthode post
var bodyParser = require("body-parser"); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost'; 
var port = 4000; 
 
app.get('/', (req, res) => {
    res.send("Hello");
});

 app.get('/contactForm', (req, res) => {
     res.sendFile(path.join(__dirname + '/contactForm.vue'));
     console.log("this is the form");
 })

app.post('/contact', (req, res) => {
    console.log("Votre message a bien été envoyé")
})



// Nous demandons à l'application d'utiliser notre routeur
//app.use(myRouter);


// Démarrer le serveur 
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n"); 
});



//------------
//code du tuto https://www.frugalprototype.com/developpez-propre-api-node-js-express/

//Afin de faciliter le routage (les URL que nous souhaitons prendre en charge dans notre API), nous créons un objet Router.
//C'est à partir de cet objet myRouter, que nous allons implémenter les méthodes. 
// var myRouter = express.Router();

// //La route où effectuer les méthides 
// myRouter.route('/contact')
// // J'implémente les méthodes GET, POST, PUT, UPDATE et DELETE
// .get(function(req,res){
//     res.json({message : "Récupère toutes les données du formulaire"})
// })
// .post(function(req,res){
//     res.json({message : "Envoie les données du formulaire"})
// })
// .put(function(req,res){
//     res.json({message : "Sélectionne un envoi de formulaire / un remplissage"})
// })
// .update(function(req,res){
//     res.json({message: "Modifie des données remplies dans un formulaire"})
// })
// .delete(function(req,res){
//     res.json({message : "Supprime un remplissage de formulaire"})
// })