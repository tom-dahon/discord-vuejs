const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

var corsOptions = {
  origin: "*"
};

app.options('*', cors()) 
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/Back/models");
//const Role = db.role;

db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// routes
require('./app/Back/routes/auth.routes')(app);
require('./app/Back/routes/user.routes')(app);
require('./app/Back/routes/channel.routes')(app);
require('./app/Back/routes/message.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  /*Role.truncate();
  Role.create({
    name: "invite"
  });

  Role.create({
    name: "moderator"
  });
  
  Role.create({
    name: "admin"
  }) */
});

