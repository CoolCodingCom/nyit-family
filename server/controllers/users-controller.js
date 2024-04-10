const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const User = require("../models/users");
const sendAuthLink = require("../util/authlink");

const getUsers = async (req, res, next) => {
  let allUsers;
  try {
    allUsers = await User.find({}, "-password");
  } catch (error) {
    return next(error);
  }

  if (allUsers.length === 0) {
    return next(new HttpError("No user existing", 404));
  }

  res
    .status(200)
    .json({ users: allUsers.map((u) => u.toObject({ getters: true })) });
};

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

  const uniqueString = crypto.randomBytes(32).toString("hex");

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    image,
    isValid: false,
    uniqueString,
    posts: [],
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
      ***REMOVED***,
      { expiresIn: "1h" }
    );
  } catch (error) {
    return next(error);
  }

  // this snippet of code is used for email confirmation and can't be tested in a CDE.
  /*
  const backendUrl = "http://localhost:5000";  // the test only works with local environment

	const message = {
		from: '"NYIT FAMILY" <nyitfamily@gmail.com>', // sender address
		to: "email",
		subject: "Email Confirmation",
		// text: "Happy Family?",
		html: `Please click <a href=${backendUrl}/api/users/verify/${uniqueString}> this link </a> to verify your email`,
	};

  sendAuthLink(message);

  res.status(201).json({ message: "waiting for user email validation." });
  */

  res
    .status(201)
    .json({ userId: newUser.id, email: newUser.email, token: token }); // jump email confirmation step
};

const verify = async (req, res, next) => {
  const uniqueString = req.params.uniqueid;

  let verifiedUser;
  try {
    verifiedUser = await User.findOne({ uniqueString });
  } catch (error) {
    return next(error);
  }

  if (!verifiedUser) {
    return next(new HttpError("uniqueString not found", 404));
  }

  if (verifiedUser && verifiedUser.isValid === true) {
    return next(new HttpError("The email has already been verified", 422));
  }

  if (
    verifiedUser &&
    verifiedUser.isValid === false &&
    verifiedUser.uniqueString === uniqueString
  ) {
    verifiedUser.isValid = true;
  } else {
    return next(new HttpError("InValid confirmatiion link", 410)); // link expiration should also be taken into consideration
  }

  try {
    await verifiedUser.save();
  } catch (error) {
    return next(error);
  }

  res.status(201).json({ userId: verifiedUser.id, email: verifiedUser.email });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let desiredUser;
  try {
    desiredUser = await User.findOne({ email });
  } catch (error) {
    return next(error);
  }

  if (!desiredUser) {
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
      ***REMOVED***,
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

/* for testing use
const tokenTester = async (req, res, next) => {
  res
    .status(200)
    .json({ userId: req.userData.userId});
};
*/

exports.getUsers = getUsers;
exports.signup = signup;
exports.verify = verify;
exports.login = login;
//exports.tokenTester = tokenTester;