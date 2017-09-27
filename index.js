const express = require("express");
const password = require('password');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
    new GoogleStrategy({
        client: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken) => {
        console.log(accessToken);
    })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
