module.exports = (sequelize, Sequelize) => {
    const ChannelUsers = sequelize.define("channel_users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      channelId: {
        type: Sequelize.INTEGER,
        unique: false
      },
      userId: {
        type: Sequelize.INTEGER,
        unique: false
      }
    });
  
    return ChannelUsers;
  };
  