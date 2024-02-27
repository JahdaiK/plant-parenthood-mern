const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	email: { 
        type: String,
        unique: true,
        required: true
    },
	password: { 
        type: String, 
        minlength: 6,
        required: true,
    },
    userName: {
        type: String,
        unique: true,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('User', userSchema)
