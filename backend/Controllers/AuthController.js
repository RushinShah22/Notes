const jwt = require("jsonwebtoken");
const UserModel = require("./../Models/UserModel")

// checking if user is valid
module.exports.checkAuth = (req, res, next) => {
    console.log(req);
    if(!req.cookies.jwt){
        res.status(401).json({
            status: "fail",
            message: "User not logged in!!!"
        })
        return;
    }
    const auth = jwt.verify(req.cookies.jwt, process.env.JWT_KEY);
    

    if(!auth){
        res.status(401).json({
            status: "fail",
            message: "Invalid User!!!"
        })
        return;
    }

    req.body.userID = auth.id;
    next();

}

module.exports.createJwt = (id) => {
    return jwt.sign({id}, process.env.JWT_KEY, {expiresIn: 3 * 60 * 60 * 24});
}

module.exports.checkUser = async (req, res, next) => {
    try{
        const user = await UserModel.login(req.body.email, req.body.password);
        req.body.id = user._id;
        next();
    }catch(err){
        res.status(401).json({
            status: "fail",
            message: err.message
        })
    }
}