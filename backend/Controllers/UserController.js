const UserModel = require("./../Models/UserModel");

module.exports.getDetails = async (req, res) => {
    try{
        const user = await UserModel.findById(req.body.userID).select("_id firstName lastName");
        res.status(200).json({
            status: "success",
            user
        })

    }catch(err){
        res.status(404).json({
            status: "fail",
            message: "user not found."
        })
    }
}