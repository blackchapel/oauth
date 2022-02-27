// Importing modules 
const express = require('express');
const passport = require('passport');
const passportSetup = require('../config/passport');  

// Initializing router
const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
});

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    // res.send(req.user);
    res.redirect('/user/profile/');
});

// Exporting modules
module.exports = router;