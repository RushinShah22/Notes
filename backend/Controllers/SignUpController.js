const mongoose = require("mongoose");
const AuthController = require("./AuthController")
const UserModel = require("./../Models/UserModel");

module.exports.SignUpUser = async (req, res) => {
    try{
        console.log(req.body);
        let user = await UserModel.create(req.body);
        console.log(user);
        const token = AuthController.createJwt(user._id );
        console.log(token);
        res.cookie("jwt", token,  {
            httpOnly: true,
            maxAge: 3 * 60 * 60 * 24 * 1000
        })
        console.log(req.body);
       

        res.cookie("firstName", user.firstName)
        res.cookie("lastName", user.lastName);
        res.status(201).json({
            status: "Success",
            userDetails: {
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id
            }
        })
    }catch(err){
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}