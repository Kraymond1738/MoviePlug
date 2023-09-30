const express = require('express');
const router = express.Router();
const path = require('path');
const fetch = require('node-fetch');
const UserController = require('../controllers/userController');
const movieController = require('../controllers/movieController');
const isAuthenticated =  require('../utils/authChecker')
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../utils/config'); // Import the JWT secret key


router.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'public', 'html', 'landing.html'));
});

router.get('/signup(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'signup.html'));
});

//route for login
router.get('/login(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'login.html'));
});

router.get('/landing(.html)?', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'public', 'html', 'landing.html'));
});

router.get('/home(.html)?', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'public', 'html', 'home.html'));
});

router.get('/dashboard(.html)?',isAuthenticated, (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'public', 'html', 'dashboard.html'));
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

router.get('/auth/logout', UserController.logout);

router.get('/movie/search/:movie', movieController.movieSearch);

// Protected route that requires JWT authentication
router.get('/auth/login', verifyToken, (req, res) => {
        res.json({ message: 'This is a protected route.' });
      });
      
      // Function to verify JWT token
      function verifyToken(req, res, next) {
        // Get the token from the request headers or query parameters
        const token = req.headers['authorization'] || req.query.token;
      
        if (!token) {
          return res.status(403).json({ message: 'Access denied. Token missing.' });
        }
      
        // Verify the token
        jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
          if (err) {
            return res.status(401).json({ message: 'Unauthorized. Invalid token.' });
          }
      
          // Token is valid, you can access the protected route
          next();
        });
      }

module.exports = router;
