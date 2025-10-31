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
    previous : [
        {
            value : {
                type : String 
            }, 
            time : {
                type : Date , 
                default : Date.now() 
            }
        }
    ]

}); 

module.exports = mongoose.model("User" , UserSchema) ; 