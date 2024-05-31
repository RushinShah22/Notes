const express = require("express");
const SignUpController = require("./../Controllers/SignUpController")



const router = express.Router();

router.post("/", SignUpController.SignUpUser);

module.exports = router;


