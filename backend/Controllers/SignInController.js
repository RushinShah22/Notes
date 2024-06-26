const AuthController = require("./AuthController");
const UserModel = require("./../Models/UserModel")


module.exports.SignInUser = async (req, res) => {
    const token = AuthController.createJwt(req.body.id);
    res.cookie("jwt", token,  {
        httpOnly: true,
        maxAge: 3 * 60 * 60 * 24 * 1000
    })
    
    const userDetails = await UserModel.findById(req.body.id).select("firstName lastName _id");
    res.cookie("firstName", userDetails.firstName)
    res.cookie("lastName", userDetails.lastName);
    res.status(201).json({
        status: "Success",
        userDetails
    })
    
}