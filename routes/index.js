const express = require('express');
const router = express.Router();
const path = require('path');
const User = require('../models/User');
const passport = require('../utils/passport');

router.get('/signup(.html)?', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'html', 'signup.html'));
});

router.get('/login(.html)?', (req, res) => {
         res.sendFile(path.join(__dirname, '..', 'public', 'html', 'login.html'));
});

router.post('/auth/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    const user = new User({ firstName, lastName, email, password, phoneNumber });
    const checkEmail = await User.findOne({email});
    if(checkEmail){
        return res.status(400).send('Email already exists');
    }
    console.log(user);
    await user.save();
   // res.send('Signup successful!');
    res.redirect('/login');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post('/auth/login',passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true
}));

module.exports = router;
