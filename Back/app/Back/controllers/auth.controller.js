const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

//Pour valider le format de l'adresse mail
function validateEmail(email) {

  let validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}

exports.signup = (req, res) => {
      User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        profile_picture: "https://firebasestorage.googleapis.com/v0/b/discord-vuejs.appspot.com/o/avatar.png?alt=media&token=eaf503ec-e2e4-4fbb-8a86-5de467e2f57c&_gl=1*1nkertj*_ga*MTQ5ODkyNDE3Ny4xNjgxOTc1NTU1*_ga_CW55HF8NVT*MTY4NjU4ODc0MC40LjEuMTY4NjU4ODc3NS4wLjAuMA..",
        roleId: 1
      })
      .then(user => {
        let token = jwt.sign({ username: user.username }, config.secret, {
          expiresIn: 86400 // 24 hours
        });
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          message: "Utilisateur bien enregistré !",
          accessToken: token
        });
      })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
    
};

exports.signin = (req, res) => {
  /* Cherche si le username correspond à un utilisateur existant, puis compare le 
  password passé dans le body avec le mot de passe lié à l'utilisateur en base de données
  return le user si cela correspond */
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      
      let token = jwt.sign({ username: user.username }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          accessToken: token
      });
    })
    .catch(err => {
      console.log(req.body);
      res.status(500).send({ message: req.body });
    });
};


// exports.signin = (req, res) => {
//   /* Cherche si le username correspond à un utilisateur existant, puis compare le 
//   password passé dans le body avec le mot de passe lié à l'utilisateur en base de données
//   return le user si cela correspond */
//   res.status(200).send({
//     ok
//   })};
