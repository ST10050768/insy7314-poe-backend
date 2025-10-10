const express = require('express');
const router = express.Router();

const { registerUser } = require('../controllers/authController');
const { validateRegistration } = require('../middleware/validateInput');
const { loginUser } = require('../controllers/loginController');
const { validateLogin } = require('../middleware/validateLogin');


router.post('/register', validateRegistration, registerUser);
router.post('/login', validateLogin, loginUser);

module.exports = router;