// Importing modules
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    googleId: String
});

const User = mongoose.model('user', userSchema);

// Exporting modules
module.exports = User;