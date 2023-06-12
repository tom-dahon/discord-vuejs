const db = require("../models");
const User = db.user;
const Message = db.message;
const Channel = db.channel;
const ChannelUsers = db.channel_users;
const Sequelize = require('sequelize');
const op = Sequelize.Op;

exports.createChannel = (req, res) => {
    // Créer un channel avec les users passés dans le body, ainsi que le user connecté
    let private = 1  
    if(Object.keys(req.body.users).length > 1)
      private = 0
    Channel.create({
          name: req.body.name,
          private: private
      }).then(channel => {
        console.log(req.body.users);
          ChannelUsers.create({
            channelId: channel.dataValues.id,
            userId: req.body.loggedUserId
          })
          req.body.users.forEach(userId => {
              ChannelUsers.create({
                  channelId: channel.dataValues.id,
                  userId: userId
              });
          });
          res.status(200).send(channel); 
      });
};


exports.getUsersFromChannel = (req, res) => {
  // Récupérer tous les utilisateurs d'un channel excepté celui qui est connecté
    ChannelUsers.findAll({
        where: {
            channelId: req.body.channelId
        }
    }).then(users => {
        if(!users) {
            return res.status(404).send({message: "Aucun utilisateur n'a été trouvé dans ce channel."})
        }
        return res.status(200).send(users);
    });
};

exports.getChannels = (req, res) => {
  // Récupérer tous les channels auxquels l'utilisateur connecté a accès
    User.findOne({
    where: {
      username: req.params.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "Aucun utilisateur n'a été trouvé." });
      }
      user.getChannels().then(function(channels) {
        return res.status(200).send(channels);
      })
    });
};

exports.getChannel = (req, res) => {
  // Récupérer un channel avec son id passé dans l'url
    Channel.findByPk(req.params.channelId)
    .then(channel => {
      if (!channel) {
        return res.status(404).send({ message: "Aucun channel n'a été trouvé." });
      }
        return res.status(200).send(channel);
    })
};

exports.getPrivateChannels = (req, res) => {
  // Récupérer un channel privé (2 personnes dans le channel max)
    Channel.findAll({
      where: {
        private: 1
      }
    })
    .then(channels => {
      if (!channels) {
        return res.status(404).send({ message: "Aucun channel privé n'a été trouvé." });
      }
        return res.status(200).send(channels);
    })
};

exports.getGroups = (req, res) => {
  // Récupérer un groupe (+ de 2 personnes dans le channel)
    Channel.findAll({
      where: {
        private: 0
      }
    })
    .then(channels => {
      if (!channels) {
        return res.status(404).send({ message: "Aucun groupe n'a été trouvé." });
      }
        return res.status(200).send(channels);
    })
};


exports.searchChannel = (req, res) => {
  // Recherche un channel dont le nom correspond au channelName passé dans le body
  Channel.findAll({
    where: {
      name: {
        [op.like]: "%" + req.body.channelName + "%"
      } 
    }
  })
  .then(channels => {
    console.log(channels);
    if(!channels) {
      return res.status(404).send({ message: "Aucun channel n'a été trouvé." });
    }
    return res.status(200).send(channels);
  });
};