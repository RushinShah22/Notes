const express = require("express");
const NotesController = require("./../Controllers/NotesController")
const AuthController = require("./../Controllers/AuthController")

const router = express.Router();

router.all("*", AuthController.checkAuth);

router.get("/", (req, res) => {
    try{

    }catch(err){

    }
})

router.get("/:id", AuthController.checkAuth, NotesController.getANote);

router.post("/", NotesController.addANote);


router.patch("/:id", async(req, res) => {

})


router.delete("/:id", async (req, res) => {

})



module.exports = router;