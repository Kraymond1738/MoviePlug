const express = require('express');
const router = express.Router();
const path = require('path');
const UserController = require('../controllers/userController');

router.get('/signup(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'signup.html'));
});

router.get('/login(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'login.html'));
});

router.post('/signup', UserController.signup);

router.post('/login', UserController.login);

module.exports = router;
