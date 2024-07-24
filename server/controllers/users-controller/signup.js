const HttpError = require("../../models/http-error");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

const User = require("../../models/users");
// const keys = require("../../config/keys");
const sendAuthLink = require("../../util/authLink");

const signup = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(
      new HttpError(
        "There are invalid user inputs, please check your data.",
        422
      )
    );
  }

  const { name, email, password, image } = req.body;

  let existedUser;
  try {
    existedUser = await User.findOne({ email });
  } catch (error) {
    return next(error);
  }

  if (existedUser) {
    return next(
      new HttpError("Email exsiting, please change another one.", 422)
    );
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (error) {
    return next(new HttpError("Can create a user, please try again", 500));
  }

  const uniqueString = uuidv4();

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    image,
    isValid: false,
    uniqueString,
    //posts: [],
  });

  try {
    await newUser.save();
  } catch (error) {
    return next(error);
  }

  // this snippet of code is used for email confirmation and can't be tested in a CDE.
  const backendUrl = process.env.EMAIL_BACKEND_URL; // the test only works with local environment
  const frontendurl = process.env.FRONTEND_URL;

  const message = {
    from: `"NYIT FAMILY" <${process.env.EMAIL_SENDER}>`, // sender address
    to: email,
    subject: "Email Confirmation",
    // text: "Happy Family?",
    html: `Please click <a href=${frontendurl}/signup/verification/${uniqueString}> this link </a> to verify your email`,
  };

  try {
    sendAuthLink(message);
  } catch (error) {
    return next(error);
  }

  res
    .status(201)
    .json({ message: "waiting for user email validation.", email });
};

exports.signup = signup;
//exports.tokenTester = tokenTester;
