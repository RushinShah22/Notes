const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    title: {
        required: [true, "A note must have a title."],
        type: String,
        trim: true
    },

    userID:{
        required: [true, "A note must have a userID."],
        type: String
    },

    note:{
        type: String,
        maxlength: [1000, "A note can be at most 1000 characters long."]
    },
    createdAt:{
        type: Date,
    }
});



NoteSchema.pre('save', function(next){
    this.createdAt = new Date();
    next();
})

const NoteModel = mongoose.model('note', NoteSchema);

module.exports = NoteModel