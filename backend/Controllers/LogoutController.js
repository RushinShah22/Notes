
module.exports.logoutUser = (req, res) => {
    try{
        res.cookie('jwt', '', {
            maxAge: 1
        });
        res.status(200).json({
            status: "success",
            message: "User Logout."
        }
        )
    }catch(err){
        res.status(401).json({
            status: "fail",
            message: err.message
        })
    }
}