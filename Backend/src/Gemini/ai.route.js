const express = require('express') ; 
const router = express.Router() ; 
const getResponse = require('./ai.controller') ; 

router.post('/getresponse' , getResponse) ; 

module.exports = router ; 