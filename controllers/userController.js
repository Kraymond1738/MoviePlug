const passport = require('passport');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../utils/config'); // Import your secret key from a config file

// Controller for user registration (signup)
exports.signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, phoneNumber } = req.body;

    // Check if the password is at least 8 characters long
    if (password.length < 8) {
      return res.redirect('/signup?message=Password must be at least 8 characters long');
    }

    const user = new User({ firstName, lastName, email, password, phoneNumber });

    // Check if the email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.redirect('/signup?message=Email already exists');
    }

    await user.save();

    // Generate a JWT token and send it in the response
    const token = generateToken(user);
    return res.status(200).json({ token });

  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.login = (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard', // Redirect to the dashboard upon successful login
    failureRedirect: '/login?message=Incorrect email or password',
    failureFlash: true,
  })(req, res, next);
};

// controller for user logout (Not required for JWT-based authentication)
exports.logout = (req, res) => {
  // No need for logout functionality with JWT
};

// Helper function to generate JWT token
function generateToken(user) {
  const payload = {
    sub: user.id,
    email: user.email,
    // Add other user data as needed
  };
  return jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Sign the token with your secret key and set expiration
}
