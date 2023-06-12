const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.message = require("../models/message.model.js")(sequelize, Sequelize);
db.channel = require("../models/channel.model")(sequelize, Sequelize);
db.channel_users = require("../models/channel_users.model")(sequelize, Sequelize);

db.user.belongsToMany(db.channel, {
  through: "channel_users",
  foreignKey: "userId",
  otherKey: "channelId"
});

db.user.hasOne(db.role, {
  foreignKey: "id"
});

db.ROLES = ["invite", "admin", "moderator"];

module.exports = db;
