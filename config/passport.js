// Importing modules
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const dotenv = require('dotenv').config();
const User = require('../models/user');

passport.use(
    new GoogleStrategy({
        // options for the google startegy
        callbackURL: '/auth/google/redirect',
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    }, async (accessToken, refreshToken, profile, done) => {
        // passport callback funtion
        const currentUser = await User.findOne({ googleId: profile.id });
        if (currentUser) {
            console.log(`currentUser: ${currentUser}`);
        } else {
            const newUser = new User({
                username: profile.displayName,
                googleId: profile.id
            });
            await newUser.save();
            console.log(`newUser: ${newUser}`);
        }
    })
);