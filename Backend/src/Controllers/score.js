const User = require('../Models/UserModel'); 

const Score = async (req , res) => {
    try {
        const score = req.body.score ; 
        const user = await User.findById(req.user.id); 
        if(!user){
            res.status(404).json({
                success : false , 
                message : "UnAuthorized!"
            })
        }
        user.score += score ; 
        user.save() ; 

        res.status(200).json({
            success : true , 
            message : "Score Updated SuccessFully" , 
            name : user.name , 
            email : user.email , 
            totalTest : user.totalTest , 
            score : user.score ,
            previous : user.previous ,  
        })
    }
    
    catch (error) {
        res.status(500).json({
            success : false , 
            message : "Error While Updating Score"
        })    
    }
}

module.exports = Score ; 