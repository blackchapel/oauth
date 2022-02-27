// Importing modules
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const dotenv = require('dotenv').config();
const User = require('../models/user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const currentUser = await User.findById(id);
    done(null, currentUser);
});

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
            done(null, currentUser);
        } else {
            const newUser = new User({
                username: profile.displayName,
                googleId: profile.id
            });
            await newUser.save();
            console.log(`newUser: ${newUser}`);
            done(null, newUser);
        }
    })
);