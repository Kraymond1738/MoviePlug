/* importing modules */
const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/MoviePlug';

/*creating app instance*/
const app = express();

/*connecting to database*/
mongoose.connect(url, {useNewUrlParser: true});
const con = mongoose.connection;

/* check connection */
con.on('open', () => console.log('Database connected...'));

/* start server */
app.listen(5000, () => console.log('server started'));
