const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("./../config/keys");

const Users = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    })
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log("access token ", accessToken);
      // console.log("refreshToken ", refreshToken);
      // console.log("profile", profile);
      Users.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // we already have a record with the given profile ID
          done(nul, existingUser); // first argu: err is null, second argu: exist user
        } else {
          new Users({ googleId: profile.id })
            .save()
            .then(user => done(null, user)); // save() put the model instance into mongodb collection
        }
      });
    }
  )
);
