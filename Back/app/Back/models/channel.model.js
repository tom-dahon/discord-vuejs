module.exports = (sequelize, Sequelize) => {
    const Channel = sequelize.define("channels", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      private: {
        type: Sequelize.INTEGER
      }
    });
  
    return Channel;
  };
  