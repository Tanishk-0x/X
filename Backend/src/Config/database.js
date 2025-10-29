const mongoose = require('mongoose') ; 

const MONGO_URL = "mongodb+srv://spiritualguruji007:5MAS6wEv7Fnq43uQ@trybyown.dravmm4.mongodb.net/?retryWrites=true&w=majority&appName=X" ;

exports.dbConnect = () => {

    mongoose.connect(MONGO_URL)
    .then(() => {
        console.log(`DB Connected SuccessFully✅`)
    })
    .catch((error) => {
        console.log(`Error in DB Connection❌` , error)
    })
}