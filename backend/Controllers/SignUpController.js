const mongoose = require("mongoose");
const AuthController = require("./AuthController")
const UserModel = require("./../Models/UserModel");

module.exports.SignUpUser = async (req, res) => {
    try{
        const user = (await UserModel.create(req.body)).select("firstName lastName _id");
        const token = AuthController.createJwt(user._id);
        res.cookie("jwt", token,  {
            httpOnly: true,
            maxAge: 3 * 60 * 60 * 24 * 1000
        })
        res.cookie("firstName", user.firstName)
        res.cookie("lastName", user.lastName);
        res.status(201).json({
            status: "Success",
            userDetails: user
        })
    }catch(err){
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}