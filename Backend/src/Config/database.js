require('dotenv').config() ; 
const mongoose = require('mongoose') ; 

const MONGO_URL = process.env.MONGOURL ;

exports.dbConnect = () => {

    mongoose.connect(MONGO_URL)
    .then(() => {
        console.log(`DB Connected SuccessFully✅`)
    })
    .catch((error) => {
        console.log(`Error in DB Connection❌` , error)
    })
}