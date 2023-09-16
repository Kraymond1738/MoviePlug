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

/*handle pages not found*/
app.all('*', (req, res) => {
	res.status(404);
	if (req.accepts('html')) {
		res.sendFile(path.join(__dirname, 'public', 'html', '404.html'));
	}else if (req.accepts('json')){
		res.json({"error" : "404 Not found ..."});
	} else res.type('txt').send("404 Not Found ....");
});

/* start server after checkeing connection */
mongoose.connection.once('open', () => {
	console.log('Database connected ....');
	app.listen(PORT, () => console.log(`server started on port ${PORT}`));
});
