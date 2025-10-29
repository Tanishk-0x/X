const express = require('express'); 
const router = express.Router(); 
const {Signup , Login , LogOut} = require('../Controllers/authController'); 

router.post('/signup' , Signup); 
router.post('/login' , Login); 
router.get('/logout' , LogOut);

module.exports = router ; 