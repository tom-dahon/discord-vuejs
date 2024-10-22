const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/users/all/:userId",
    [authJwt.verifyToken],
    controller.allUsers
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.get(
    "/api/users/list",
    [authJwt.verifyToken],
    controller.userList
  );

  app.post(
    "/api/users/profile_picture",
    [authJwt.verifyToken],
    controller.profilePicture
  );

  app.post(
    "/api/users/updateUsername",
    [authJwt.verifyToken],
    controller.updateUsername
  );

  app.get(
    "/api/users/delete/:userId",
    [authJwt.verifyToken],
    controller.deleteUser
  );

  app.get(
    "/api/users/:userId",
    [authJwt.verifyToken],
    controller.getUser
  );

  app.get(
    "/api/users/role/:roleId",
    [authJwt.verifyToken],
    controller.getRole
  );
};
