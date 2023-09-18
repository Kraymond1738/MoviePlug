/* importing modules */
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const connectDB = require('./utils/db');
const authRoutes = require('./routes/authRoutes'); 
const userController = require('./controllers/userController');

const PORT = process.env.PORT || 5000;

connectDB();
const app = express();

/* Middleware */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

/* Routes */
app.use('/', authRoutes);

/* Handle pages not found */
app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'public', 'html', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ "error": "404 Not found ..." });
  } else res.type('txt').send("404 Not Found ....");
});

/* Start server after checking connection */
mongoose.connection.once('open', () => {
  console.log('Database connected ....');
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});
