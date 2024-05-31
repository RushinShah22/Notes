const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const UserModel = require("./../Models/UserModel");

module.exports.SignUpUser = async (req, res) => {
    try{
        const user = await UserModel.create(req.body);
        const token = jwt.sign({id: user._id}, process.env.JWT_KEY, {expiresIn: 3 * 60 * 60 * 24});

        res.cookie("jwt", token,  {
            httpOnly: true,
            maxAge: 3 * 60 * 60 * 24 * 1000
        })
        res.status(201).json({
            status: "Success",
            userID: user._id
        })
    }catch(err){
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}