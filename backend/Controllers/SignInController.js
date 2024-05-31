const AuthController = require("./AuthController");


module.exports.SignInUser = (req, res) => {
    const token = AuthController.createJwt(req.body.id);
    res.cookie("jwt", token,  {
        httpOnly: true,
        maxAge: 3 * 60 * 60 * 24 * 1000
    })
    res.status(201).json({
        status: "Success",
        userID: req.body.id
    })
    
}