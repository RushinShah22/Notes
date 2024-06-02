const express = require("express");
const NotesController = require("./../Controllers/NotesController")
const AuthController = require("./../Controllers/AuthController")

const router = express.Router();



router.route("/").get(AuthController.checkAuth,NotesController.getAllNotes).post(AuthController.checkAuth,NotesController.addANote);

router.route("/:id").get(AuthController.checkAuth,NotesController.getANote).delete(AuthController.checkAuth, NotesController.deleteANote);



module.exports = router;