const express = require('express') ; 
const aiRoute = require('./src/Gemini/ai.route') ; 
const app = express() ; 

const PORT = 5000 ; 

app.use(express.json()); 

app.use('/ai' , aiRoute) ; 

app.get('/' , (req,res) => {
    res.send(`<h1>Default Route</h1>`)
}); 

app.listen(PORT , () => {
    console.log(`Server Started SuccessFully At Port : ${PORT}✅`) ; 
}); 

