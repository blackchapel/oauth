// Importing modules 
const express = require('express');
const db = require('./config/connection'); 
const authRoutes = require('./routes/auth');

// Initializing an express app
const app = express();

// Set up view engine
app.set('view engine', 'ejs');

// // Routes
app.get('/', (req, res) => {
    res.render('home');
});
app.use('/auth', authRoutes);

// Listening on port 3000
app.listen(3000, () => {
    console.log('Server Active');
});