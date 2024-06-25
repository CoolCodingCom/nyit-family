const HttpError = require("../../models/http-error");

const User = require("../../models/users");

const getUserById = async (req, res, next) => {
  const userid = req.params.uid;

  let desiredUser;
  try {
    desiredUser = await User.findById(userid, "-password");
  } catch (error) {
    return next(error);
  }

  if (!desiredUser) {
    return next(new HttpError("No user existing", 404));
  }

  res.status(200).json({ user: desiredUser.toObject({ getters: true }) });
};

exports.getUserById = getUserById;
