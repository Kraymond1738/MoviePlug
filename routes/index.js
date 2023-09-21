const express = require('express');
const router = express.Router();
const path = require('path');
const fetch = require('node-fetch');
const UserController = require('../controllers/userController');
const movieController = require('../controllers/movieController');

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
        res.sendFile(path.join(__dirname, '..', 'public', 'html', 'home.html'));
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

router.get('/search(.html)?', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'public', 'html', 'search.html'));
});

router.post('/auth/signup', UserController.signup);

router.post('/auth/login', UserController.login);

router.get('/movie/search/:movie', movieController.movieSearch);


/*
async (request, response) => {
const movie = request.params.movie;
const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${movie}`;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'bc579c69a3msh5488c4b48da0464p11ec5ejsnc2fdee9c50e4',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  }
};

try {
	const fetchResponse = await fetch(url, options);
	const result = await fetchResponse.json();
	console.log(result);
	response.json(result);
} catch (error) {
	console.error(error);
}
}); */

module.exports = router;
