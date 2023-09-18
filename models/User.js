const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the User schema
const userSchema = new mongoose.Schema({
<<<<<<< HEAD:models/User.js
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
   lastName: {
=======
  firstname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  lastname: {
>>>>>>> bfea23002208ddf0fd11aed5ecbb1be37de1d434:models/user.js
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
<<<<<<< HEAD:models/User.js
    trim: true,
  },
=======
    unique: true,
  }
>>>>>>> bfea23002208ddf0fd11aed5ecbb1be37de1d434:models/user.js
});

// Hash the user's password before saving to the database
userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(this.password, salt);

    this.password = hashedPassword;

    return next();
  } catch (error) {
    return next(error);
  }
});

// Method to compare a given password with the user's hashed password
userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (error) {
    return false;
  }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
