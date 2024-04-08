const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const User = require("../models/users");

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

  const newUser = new User({
    name,
    email,
    password,
    image,
    posts: []
  });

  try {
    await newUser.save();
  } catch (error) {
    return next(error);
  }

  res.status(201).json({ userId: newUser.id, email: newUser.email });
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
      new HttpError("Could not find the user, credentials seems to be wrong.", 403)
    );
  }

  if (desiredUser.password !== password) {
    return next(
      new HttpError(
        "Can't sign in, please try again", 500
      )
    );
  } 

  res.json({
    userId: desiredUser.id,
    email: desiredUser.email,
  });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
