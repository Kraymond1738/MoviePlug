const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname : {
        type : string,
        required : true
    }
    lastname : {
         type : string,
         required : true
    }
    email : {
         type : string,
         required : true 
    }
    password : {
        type : string,
        required : true
    }
    phonenumber : {
         type : string,
         required : true
    }
});


module.exports = mongoose.model('user', userSchema);
