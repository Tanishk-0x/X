const express = require('express') ; 
const router = express.Router() ; 
const Score = require('../Controllers/score'); 
const authMiddleware = require('../Middlewares/authMiddleware'); 
const UserDetails = require('../Controllers/userController'); 

router.post('/scr' , authMiddleware , Score) ; 
router.get('/details' , authMiddleware , UserDetails); 

module.exports = router ; 