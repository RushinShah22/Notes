const mongoose = require("mongoose");
const {isEmail} = require("validator");


const UserSchema = new mongoose.Schema({
    firstName:{
        required: [true, "A user must have a first name."],
        trim: true,
        type: String,
        maxlength: [15, "First name can be of atmost 15 characters long."]
    },
    lastName:{
        required: [true, "A user must have a last name."],
        trim: true,
        type: String,
        maxlength: [15, "Last name can be of atmost 15 characters long."]

    },

    email:{
        required: [true, "A user must have a email."],
        type: String,
        unique: true,
        validate: [isEmail, "A user must have a valid email."]
    },

    password:{
        required: [true, "A user must have a password."],
        type: String,
        minlength: [8, "Password must be atleast 8 characters long."]
    }
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;