const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
const keys = require("../config/keys");
const cookieSession = require("cookie-session");


const passportUtil = app => {
  app.use(
    cookieSession({
      keys: ["my_secret"],
      maxAge: 1000 * 60 * 60 * 24 // 1 day
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())

  passport.use(new GoogleStrategy({
    clientID: keys.google.clientId,
    clientSecret: keys.google.clientSecret,
    callbackURL: "https://5000-coolcodingco-nyitfamily-6w700g0gii9.ws-us110.gitpod.io/api/auth/google/callback"
  },
  (accessToken, refreshToken, profile, cb) => {
    // create new user and store the user into database ot just fetch the user
    return cb(null, profile)
  }
));

  passport.serializeUser((user, done) => {
    done(null, user)
  })

  passport.deserializeUser((user, done) => {
    done(null, user)
  })
}

module.exports = passportUtil