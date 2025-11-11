
const User = require('../Models/UserModel') ; 

const UserDetails = async (req , res) => {
    const user = req.user.id ; 
    const userExist = await User.findById(user) ; 
    if(!userExist){
        res.status(404).json({
            success : false , 
            message : "Details Not Found"
        }); 
    }

    res.status(200).json({
        success : true , 
        message : "Details Fetched SuccessFully" , 
        name : userExist.name , 
        email : userExist.email , 
        totalTests : userExist.totalTest , 
        score : userExist.score , 
        previous : userExist.previous ,
    })
}

module.exports = UserDetails ; 