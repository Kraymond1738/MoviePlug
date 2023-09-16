/* importing modules */
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const connectDB = require('./utils/db');

const PORT = process.env.PORT || 5000;

connectDB();
const app = express();

/*middleware*/
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use('/', require('./routes/index'));

/* start server */
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
