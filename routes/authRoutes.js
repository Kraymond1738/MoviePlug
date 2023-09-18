const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require('../controllers/userController'); // Import userController

// Route to serve the signup page
router.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/signup.html'));
});

// Route to serve the login page
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

// Route for user registration (signup)
router.post('/signup', userController.signup);

// Route for user login
router.post('/login', userController.login);

module.exports = router;
