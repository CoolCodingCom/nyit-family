const HttpError = require("../../models/http-error");

const User = require("../../models/users");


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

exports.getUsers = getUsers;