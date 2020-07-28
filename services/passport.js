const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const InstagramStrategy = require("passport-instagram").Strategy;
const mongoose = require("mongoose");

const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id })
        .then((existingUser) => {
          if (existingUser) {
            done(null, existingUser);
            return;
          } else {
            new User({
              googleId: profile.id,
            })
              .save()
              .then((user) => done(null, user));
          }
        })
        .catch((err) => console.error(err));
    }
  )
);

passport.use(
  new InstagramStrategy(
    {
      clientID: keys.instagramClientID,
      clientSecret: keys.instagamClientSecret,
      callbackURL: "/auth/instagram/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("PROFILE", profile);
      User.findOne({ googleId: profile.id })
        .then((existingUser) => {
          if (existingUser) {
            done(null, existingUser);
            return;
          } else {
            new User({
              instgramId: profile.id,
            })
              .save()
              .then((user) => done(null, user));
          }
        })
        .catch((err) => console.error(err));
    }
  )
);
