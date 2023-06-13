OLLIER Benjamin
DAHON TOM

## Comment lancer le projet
En premier lieu, afin d'utiliser des bases de données MySQL, vous devez installer le logiciel WAMP pour Windows ou MAMP pour MAC, puis lancez WAMP/MAMP

Ensuite il faut configurer le fichier Back/app/Back/config/db.config.js :

Remplir le user et le password

Exécutez les commandes suivantes :
```
cd Front
npm install
```

Afin de lancer le projet il faut effectuer les étapes suivantes en utilisant 2 invites de commandes :
Dans le premier exécutez les commandes suivantes :

```
cd Back
node server.js
```

Si nodemon est installé :
```
nodemon server.js
```
Dans le deuxième terminal exécutez les commandes suivantes :
```
cd Front
npm run serve
```
Ensuite dirigez vous vers l'URL localhost:8080/signin afin d'arriver sur la page de connexion de l'application ou localhost:8080/signup si vous n'avez pas encore de compte.

Si le serveur est utilisé voici son IP : 217.160.195.38

### Application développée avec les technologies suivantes
Nodejs - Express - Sequelize - Javascript - VueJS - HTML - CSS - Bootstrap

Tom Dahon, Benjamin Ollier

