# beyond_rh
Votre projet est codé en Vuejs et en Nodejs. Pour accéder au site, il va falloir faire quelques manipulations.

## Récupérer le projet depuis Github
Téléchargez le dossier ZIP du projet en cliquant sur le bouton vert "Code". 
Enregistrez ce dossier dans un dossier approprié. Exemple sur votre bureau dans un dossier Beyond.
Dézippez le dossier ZIP pour accéder au projet.

## Ouvrir le terminal
Selon votre OS (Windows ou Mac), réalisez la manipulation suivante afin d'accéder à votre terminal de commande. 

- Sur Mac : utilisez le Finder et rendez-vous dans le dossier où a été enregistré le projet Github puis cliquez deux fois sur Terminal.
- Sur Windows : utilisez l'Explorateur de fichier et rendez-vous dans le dossier où a été enregistré le projet Github puis cliquez dans la barre de navigation (Desktop > Beyond) et taper " cmd "

Que ce soit sur Mac ou sur Windows, une fenêtre noire va s'ouvrir. C'est votre terminal de commandes.

## Initialiser le projet
Dans votre terminal de commande, installer le package npm qui va importer toutes les dépendances nécessaires au bon fonctionnement du site.

```
npm install
```

## Lancer le serveur Nodejs
Télécharger NodeJs sur le site officiel : https://nodejs.org/en/download/
Ouvrez un autre terminal et entrez-y la commande suivante :

```
node app.js
```

Le serveur doit être lancé afin de recevoir les messages du formulaire de contact. 


### Compiler le projet et lancer l'application Vuejs
Dans votre premier terminal après la commande npm install, entrez :

```
npm run serve
```

### Compiler et réduire le volume du projet avant la production
```
npm run build
```

### Accès au site
Accéder au site en tapant dans la barre de recherche de votre navigateur, l'adresse localhost indiquée par l'application Vuejs. Par défaut > localhost:8080


### Personnaliser la configuration de votre application Vuejs
Voir [Configuration Reference](https://cli.vuejs.org/config/).

### Fonctionnement du formulaire
Afin d'éviter les spams et renforcer la sécurité, l'adresse email et son mot de passe sont renseignés dans un fichier caché. Créez ce fichier à l'intérieur du projet, à la racine et le nommer ainsi : 

```
.env
```

Y renseigner son email et son password :

```
EMAIL: votreEmail@gmail.com
PASSWORD: XXXXX
```

Si vous utilisez une adresse gmail, veillez à autoriser l'accès à votre boite mail. https://myaccount.google.com/lesssecureapps
