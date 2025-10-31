const express = require('express') ; 
const aiRoute = require('./src/Gemini/ai.route') ;
const authRoutes = require('./src/Routes/authRoutes') ;  
const app = express() ; 
require('./src/Config/database').dbConnect() ; 
require('dotenv').config() ; 
const cookieParser = require('cookie-parser'); 

const PORT = 5000 ; 

app.use(express.json()); 
app.use(cookieParser()); 

app.use('/ai' , aiRoute) ; 
app.use('/auth' , authRoutes) ; 

app.get('/' , (req,res) => {
    res.send(`<h1>Default Route</h1>`)
}); 

app.listen(PORT , () => {
    console.log(`Server Started SuccessFully At Port : ${PORT}✅`) ; 
}); 

