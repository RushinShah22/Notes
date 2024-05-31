const mongoose = require("mongoose");
const NoteModel = require("./../Models/NoteModel");


module.exports.getAllNotes = async (req, res) => {
    try{
        const notes = await NoteModel.find({userID: req.body.userID});
    
        res.status(200).json({
            status: "success",
            notes
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message: err.message
        })
    }
    


}

module.exports.getANote = async (req, res) => {
    try{
        const note = await NoteModel.find({_id: req.params.id, userID: req.body.userID});
        res.status(200).json({
            status: "success",
            note
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message: err.message
        })
    }
}


module.exports.addANote = async (req, res) => {
    try{
        const note = await NoteModel.create(req.body);
        res.status(201).json({
            status: "success",
            note
        })
    }catch(err){
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
};

