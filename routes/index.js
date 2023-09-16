const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/signup(.html)?', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'html', 'signup.html'));
});

router.get('/login(.html)?', (req, res) => {
         res.sendFile(path.join(__dirname, '..', 'public', 'html', 'login.html'));
});

module.exports = router;
