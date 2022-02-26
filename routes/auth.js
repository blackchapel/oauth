// Importing modules 
const express = require('express');
const passport = require('passport');
const passportSetup = require('../config/passport');  
const {
    login, 
    logout,
    redirect
} = require('../controllers/auth');

// Initializing router
const router = require('express').Router();

// Routes
router.get('/login', login);
router.get('/logout', logout);
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));
router.get('/google/redirect', passport.authenticate('google'), redirect);

// Exporting modules
module.exports = router;