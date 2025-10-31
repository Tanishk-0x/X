const express = require('express') ; 
const router = express.Router() ; 
const getResponse = require('./ai.controller') ; 
const userMiddleware = require('../Middlewares/userMiddleware'); 
const authMiddleware = require('../Middlewares/authMiddleware'); 

router.post('/getresponse' , authMiddleware , userMiddleware , getResponse) ; 

module.exports = router ; 