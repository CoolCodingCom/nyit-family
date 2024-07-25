const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
// const keys = require("../config/keys");

const cookieSession = require("cookie-session");
const { v4: uuidv4 } = require("uuid");

const User = require("../models/users");

const passportUtil = (app) => {
  app.use(
    cookieSession({
      keys: ["my_secret"],
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${process.env.EMAIL_BACKEND_URL}/api/auth/google/callback`,
      },
      async (accessToken, refreshToken, profile, cb) => {
        // create new user and store the user into database or just fetch the user
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
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};

module.exports = passportUtil;
