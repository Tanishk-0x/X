const User = require('../Models/UserModel'); 


const userMiddleware = async(req , res , next) => {
    try {
        const code = req.body.code ; 
        const flag = req.body.flag ; 
        const user = await User.findById(req.user.id);
        

        if(flag === '0'){
            user.previous = code ; 
            user.totalTest += 1 ;
        }
        
        await user.save() ; 
        next() ;
    }
    catch (error) {
       console.log("ERROR ==> " , error);
       return res.status(500).json({
        success : false , 
        message : "Something Went Wrong"
       }); 
    }
}

module.exports = userMiddleware ;