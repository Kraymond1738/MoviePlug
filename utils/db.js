const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost/MoviePlug';

mongoose.Promise = global.Promise;

// Connect to the MongoDB database
mongoose.dbconnect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Bind connection events
db.on('connected', () => {
  console.log(`Connected to MongoDB at ${mongoURI}`);
});

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Export the Mongoose connection
module.exports = db;
