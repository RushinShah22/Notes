const jwt = require("jsonwebtoken");


module.exports.checkAuth = (req, res, next) => {

    const auth = jwt.verify(req.cookies.jwt, process.env.JWT_KEY);

    if(!auth){
        res.status(401).json({
            status: "fail",
            message: "User not logged in!!!"
        })
    }
    next();

}