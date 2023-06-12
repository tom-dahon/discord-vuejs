const db = require("../models");
const User = db.user;
const Sequelize = require('sequelize');
const op = Sequelize.Op;
const Role = db.role;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.userList = (req, res) => {
  User.findAll()
  .then(users => {
    res.status(200).send(users); 
  });
};

exports.allUsers = (req, res) => {
  //Récupère tous les utilisateurs sauf l'utilisateur en cours
  User.findAll({
    where: {
      id: {
        [op.not]: req.params.userId
      }
    }
  })
  .then(users => {
    res.status(200).send(users); 
  });
};

exports.profilePicture = (req, res) => {
  // Stocke le chemin de la photo de profil
  User.findByPk(req.body.userId)
    .then(user => {

      user.profile_picture = req.body.profile_picture_path;
      user.save();
      
      return res.status(200).send(profile_picture_path);
    })
    .catch(err => {
      console.log(err);
});
};

exports.updateUsername = (req, res) => {
  // Met à jour le username du user passé en paramètre
  User.findByPk(req.body.userId)
    .then(user => {
      user.username = req.body.username;
      user.save();
      
      return res.status(200).send(req.body.username);
    })
    .catch(err => {
      console.log(err);
});
}

exports.deleteUser = (req, res) => {
  User.findByPk(req.params.userId)
    .then(user => {
      user.destroy()
      return res.status(200).send("Utilisateur supprimé");
    })
    .catch(err => {
      console.log(err);
});
}

exports.getUser = (req, res) => {
  // Renvoie le user correspondant à l'id passé en paramètre
  User.findByPk(req.params.userId)
    .then(user => {
      return res.status(200).send(user);
    })
    .catch(err => {
      console.log(err);
});
};

exports.getRole = (req, res) => {
  Role.findByPk(req.params.roleId)
  .then(role => {
    res.status(200).send(role);
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
}