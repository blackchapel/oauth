// Importing modules
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const dotenv = require('dotenv').config();

passport.use(
    new GoogleStrategy({
        // options for the google startegy
        callbackURL: '/auth/google/redirect',
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback funtion
        console.log(profile);
    })
);