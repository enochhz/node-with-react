const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require('mongoose');
const keys = require("./../config/keys");

const Users = mongoose.model('users');

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            console.log('\n================== After Google OAuth =======================');
            console.log('access token ', accessToken);
            console.log('refreshToken ', refreshToken);
            console.log('profile', profile);
            console.log('================== Done ======================================\n');
            Users.findOne({ googleId: profile.id}).then((existingUser) => {
               if (existingUser)  {
                   // we already have a record with the given profile ID
                   console.log('Old user login');
               } else {
                   new Users({ googleId : profile.id}).save(); // save() put the model instance into mongodb collection
                   console.log('A new User login!\nsuccess: new User created.');
               }
            })
        }
    )
);
