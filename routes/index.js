const express = require('express');
const router = express.Router();
const path = require('path');
const UserController = require('../controllers/userController');
//const movieController = require('../controllers/movieController');

router.get('/signup(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'signup.html'));
});

router.get('/login(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'login.html'));
});

router.get('/landing(.html)?', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'public', 'html', 'landing.html'));
});

router.get('/home(.html)?', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'public', 'html', 'Home.html'));
});

router.get('/About(.html)?', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'public', 'html', 'About.html'));
});

router.get('/Blog(.html)?', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'public', 'html', 'Blog.html'));
});

router.get('/contact(.html)?', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'public', 'html', 'contact.html'));
});

router.post('/auth/signup', UserController.signup);

router.post('/auth/login', UserController.login);

//router.post('/movie/search', movieController.movieSearch);

module.exports = router;
