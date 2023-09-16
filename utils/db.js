const mongoose = require('mongoose');
const url = 'mongodb://localhost/MoviePlug';

async function dbconnect() {
  try {
    await mongoose.connect(url, { useNewUrlParser: false, useUnifiedTopology: false });
    const con = mongoose.connection;
    con.on('open', () => console.log('Database connected...'));
    con.on('error', (error) => console.error('Database connection failed...', error));
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

dbconnect();

module.exports = dbconnect;
