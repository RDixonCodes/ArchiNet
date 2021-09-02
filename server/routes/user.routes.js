const UserController = require("../controllers/user.controller");
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    app.post("/api/user/register", UserController.register);
    app.post("/api/user/login", UserController.login);
    app.post("/api/user/logout", UserController.logout);

    //this route now has to be authenticated
    //if this fails authentication, it will return the error
    // if it is successful the "next" method that is called comes from userController
    app.get("/api/user/loggedin", authenticate, UserController.getLoggedInUser);
}