const User = require('../Models/UserModel'); 
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcrypt'); 

//~-------------Signup-------------------

const Signup = async (req , res) => {
    try {
        const {name , email , password} = req.body ; 
        const exist = await User.findOne({email}); 
        if(exist){
            return res.status(400).json({
                success : false , 
                message : "User Already Exist❌"
            })
        }
        const HashedPassword = await bcrypt.hash(password , 10) ; 
        
        await User.create({
            name , email , password : HashedPassword 
        }); 

        res.status(201).json({
            success : true , 
            message : "Signup SuccessFully✅" , 
            name : name , 
            email : email , 
            password : password , 
            hashedPassword : HashedPassword
        })
    }

    catch (error) {
        return res.status(500).json({
            success : false , 
            message : "An Error While Signup"
        })    
    }
}

//~---------------Login-----------------

const Login = async (req , res) => {
    try {
        const {email , password} = req.body ; 
        const user = await User.findOne({email}); 
        
        if(!user){
            return res.status(401).json({
                success : false , 
                message : "User Not Exist"
            })
        }

        const isMatch = await bcrypt.compare(password , user.password); 
        if(!isMatch){
            return res.status(401).json({
                success : false ,
                message : "Incorrect PassWord"
            })
        }

        const JWT_SECRET = "Tanishk009"; 
        const token = jwt.sign({id : user._id} , JWT_SECRET); 

        res.cookie("token" , token , {
            httpOnly : true , 
            secure : true , 
            maxAge : 7 * 24 * 60 * 60 * 1000 , 
            sameSite: 'None',
        })

        res.status(201).json({
            success : true , 
            message : "Login SuccessFully✅" , 
            token : token , 
        })
    }
    
    catch (error) {
        return res.status(500).json({
            success : false , 
            message : "An Error While Login"
        })   
    }
}

module.exports = {Signup , Login}