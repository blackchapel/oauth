// Importing modules 
const express = require('express');
const {
    login, 
    logout,
    oauth_google
} = require('../controllers/auth');

// Initializing router
const router = require('express').Router();

// Routes
router.get('/login', login);
router.get('/logout', logout);
router.get('/google', oauth_google);

// Exporting modules
module.exports = router;