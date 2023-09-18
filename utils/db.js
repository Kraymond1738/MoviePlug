const mongoose = require('mongoose');
const url = 'mongodb://localhost/MoviePlug';

async function dbconnect() {
  try {
<<<<<<< HEAD
    await mongoose.connect(url, { useNewUrlParser: false, useUnifiedTopology: false });
=======
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
>>>>>>> bfea23002208ddf0fd11aed5ecbb1be37de1d434
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

module.exports = dbconnect;
