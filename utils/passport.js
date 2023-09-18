const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

// Serialize user object to store in session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user object from session
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// Configure the local strategy for passport
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email', // The field name for the username (by default, 'username')
      passwordField: 'password', // The field name for the password (by default, 'password')
    },
    (email, password, done) => {
      // Match user by email
      User.findOne({ email: email }, (err, user) => {
        if (err) return done(err);

        if (!user) {
          return done(null, false, { message: 'Incorrect email or password' });
        }

        // Match the password
        user.comparePassword(password, (err, isMatch) => {
          if (err) return done(err);

          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Incorrect email or password' });
          }
        });
      });
    }
  )
);

module.exports = passport;
