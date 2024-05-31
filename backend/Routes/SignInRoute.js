const express = require("express");
const AuthController = require("./../Controllers/AuthController")
const SignInController = require("./../Controllers/SignInController")

const router = express.Router();


router.route("/").post(AuthController.checkUser, SignInController.SignInUser);

module.exports = router;