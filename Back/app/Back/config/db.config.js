module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Benji0812",
  DB: "js",
  dialect: "mysql",
  port:"3306",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
