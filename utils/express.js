const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware for logging HTTP requests
app.use(morgan('dev'));

// Middleware for parsing JSON data in request bodies
app.use(bodyParser.json());

// Middleware for handling CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Serve the landing page of the application
app.get('/', (req, res) => {
    res.sendFile('public/landing.html', { root: __dirname });
  });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;
