// Importing modules 
const express = require('express');
const passport = require('passport');
const passportSetup = require('../config/passport');  

// Initializing router
const router = require('express').Router();

const authCheck = (req, res, next) => {
    if (!req.user) {
        res.redirect('/auth/login');
    } else {
        next();
    }
};

router.get('/profile', authCheck, (req, res) => {
    res.render('profile', { user: req.user });
});

// Exporting modules
module.exports = router;