const express = require("express");
const AuthController = require("./../Controllers/AuthController")
const UserController = require("./../Controllers/UserController")
const router = express.Router();


router.route("/").get(AuthController.checkAuth, UserController.getDetails);

module.exports = router;