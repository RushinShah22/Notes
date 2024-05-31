const jwt = require("jsonwebtoken");
const express = require("express");

const LogoutController = require("./../Controllers/LogoutController")

const router = express.Router();

router.route("/").get(LogoutController.logoutUser);

module.exports = router;