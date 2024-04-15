const HttpError = require("../../models/http-error");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

const User = require("../../models/users");
const keys = require("../../config/keys");

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
      new HttpError("email exsiting, please change another one.", 422)
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

  let token;
  try {
    token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      keys.token.PRIVATE_KEY,
      { expiresIn: "1h" }
    );
  } catch (error) {
    return next(error);
  }

  // this snippet of code is used for email confirmation and can't be tested in a CDE.
  const backendUrl = "http://localhost:5000";  // the test only works with local environment

  const message = {
      from: '"NYIT FAMILY" <www.nyitfamily.site>', // sender address
      to: ***REMOVED***,
      subject: "Email Confirmation",
      // text: "Happy Family?",
      html: `Please click <a href=${backendUrl}/api/users/verify/${uniqueString}> this link </a> to verify your email`,
  };

  sendAuthLink(message);

  res.status(201).json({ message: "waiting for user email validation." });

  // res
  //   .status(201)
  //   .json({ userId: newUser.id, email: newUser.email, token: token }); // jump email confirmation step
};

exports.signup = signup;
//exports.tokenTester = tokenTester;