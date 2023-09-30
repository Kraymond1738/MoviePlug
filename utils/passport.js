const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { secretKey } = require('./config');

// Serialize user object to store in session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user object from session
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(err => {
      done(err, null);
    });
});

// Configure the local strategy for passport
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
          return done(null, false, { message: 'Incorrect email or password' });
        }

        // Check the password
        const isMatch = await user.comparePassword(password);

        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Incorrect email or password' });
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretKey, // Use the imported secret key
};

passport.use(
  new JwtStrategy(jwtOptions, async (payload, done) => {
    try {
      const user = await User.findById(payload.sub);

      if (!user) {
        return done(null, false); // User not found
      }

      return done(null, user); // User found and authenticated
    } catch (error) {
      return done(error, false); // Error occurred during authentication
    }
  })
);

module.exports = passport;
