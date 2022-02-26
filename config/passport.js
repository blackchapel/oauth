// Importing modules
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
    new GoogleStrategy({
        // options for the google startegy
    }), () => {
        // passport callback funtion
    }
);