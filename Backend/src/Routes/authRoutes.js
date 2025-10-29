const express = require('express'); 
const router = express.Router(); 
const {Signup , Login} = require('../Controllers/authController'); 

router.post('/signup' , Signup); 
router.post('/login' , Login); 

module.exports = router ; 