const HttpError = require("../../models/http-error");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../../models/users");
const keys = require("../../config/keys");


const login = async (req, res, next) => {
  const { email, password } = req.body;

  let desiredUser;
  try {
    desiredUser = await User.findOne({ email });
  } catch (error) {
    return next(error);
  }

  if (!desiredUser || !desiredUser.isValid) {
    return next(
      new HttpError(
        "Could not find the user, credentials seems to be wrong.",
        403
      )
    );
  }

  let isValidPassword;
  try {
    isValidPassword = await bcrypt.compare(password, desiredUser.password);
  } catch (error) {
    return next(new HttpError("Can't sign in, please try again", 500));
  }

  if (!isValidPassword) {
    return next(
      new HttpError(
        "Could not identify user, credentials seems to be wrong.",
        403
      )
    );
  }

  let token;
  try {
    token = jwt.sign(
      { userId: desiredUser.id, email: desiredUser.email },
      keys.token.PRIVATE_KEY,
      { expiresIn: "1h" }
    );
  } catch (error) {
    return next(error);
  }

  res.json({
    userId: desiredUser.id,
    email: desiredUser.email,
    token: token,
  });
};

exports.login = login;

/* for testing use
  const tokenTester = async (req, res, next) => {
    res
      .status(200)
      .json({ userId: req.userData.userId});
  };
*/
