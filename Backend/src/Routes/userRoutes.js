const express = require('express') ; 
const router = express.Router() ; 
const Score = require('../Controllers/score'); 
const authMiddleware = require('../Middlewares/authMiddleware'); 

router.post('/scr' , authMiddleware , Score) ; 

module.exports = router ; 