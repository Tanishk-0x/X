const mongoose = require('mongoose') ; 

const UserSchema = new mongoose.Schema({

    name : {
        type : String , 
        required : true 
    }, 
    email : {
        type : String , 
        required : true 
    }, 
    password : {
        type : String ,
        required : true 
    }, 

    totalTest : {
        type : Number , 
        default : 0 
    }, 
    score : {
        type : Number , 
        default : 0 
    }, 
    previous : {
        type : String , 
    }

}); 

module.exports = mongoose.model("User" , UserSchema) ; 