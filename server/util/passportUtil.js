const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
const keys = require("../config/keys");
const cookieSession = require("cookie-session");
const { v4: uuidv4 } = require('uuid');

const User = require("../models/users");

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
    clientID: keys.google.CLIEND_ID,
    clientSecret: keys.google.CLIEND_SECRET,
    callbackURL: "https://5000-coolcodingco-nyitfamily-cl8vl21mdvt.ws-us110.gitpod.io/api/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, cb) => {
    // create new user and store the user into database ot just fetch the user
    const email = profile._json.email;

    let existedUser;
    try {
      existedUser = await User.findOne({ email });
    } catch (error) {
      throw error;
    }
  
    if (existedUser) {
      return cb(null, existedUser);
    }
  
    const newUser = new User({
      name: profile._json.name,
      email,
      password: uuidv4(),
      image: profile._json.picture,
      isValid: true,
      uniqueString: uuidv4(),
      posts: [],
    });
  
    try {
      await newUser.save();
    } catch (error) {
      throw error;
    }
  
    return cb(null, newUser);
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