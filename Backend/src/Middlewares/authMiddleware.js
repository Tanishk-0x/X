const jwt = require('jsonwebtoken') ; 
require('dotenv').config(); 

const JWT_SECRET = process.env.JWT_SECRET ; 

const authMiddleware = (req , res , next) => {

    const token = req.cookies.token ; 

    if(!token){
        return res.status(404).json({
            success : false , 
            message : "Token Not Found"
        })
    }

    try {
        const decode = jwt.verify(token , JWT_SECRET); 
        req.user = decode ; 
        next() ;     
    }
    
    catch (error) {
        return res.status(403).json({
            success : false , 
            message : "Invalid Token"
        })
    }

}

module.exports = authMiddleware ; 