 // Importing modules 
 const express = require('express');

// Initializing an express app
const app = express();

// Set up view engine
app.set('view engine', 'ejs');

// Home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('Server Active');
});