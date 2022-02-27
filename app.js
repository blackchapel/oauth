// Importing modules 
const express = require('express');
const db = require('./config/connection'); 
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const cookieSession = require('cookie-session');
const dotenv = require('dotenv').config();
const passport = require('passport');

// Initializing an express app
const app = express();

// Set up view engine
app.set('view engine', 'ejs');

// Set up cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
}));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// // Routes
app.get('/', (req, res) => {
    res.render('home');
});
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

// Listening on port 3000
app.listen(3000, () => {
    console.log('Server Active');
});