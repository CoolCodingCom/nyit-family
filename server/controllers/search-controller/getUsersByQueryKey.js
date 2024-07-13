const HttpError = require("../../models/http-error");

const User = require("../../models/users");

const getUsersByQueryKey = async (req, res, next) => {
  const qkey = req.params.qkey;

  let desiredUsers;
  try {
    desiredUsers = await User.find(
      { name: { $regex: qkey, $options: "i" } },
      "-password"
    );
  } catch (error) {
    return next(error);
  }

  if (desiredUsers.length === 0) {
    return next(new HttpError("No user existing", 404));
  }

  console.log(desiredUsers); // for testing

  res
    .status(200)
    .json({ users: desiredUsers.map((u) => u.toObject({ getters: true })) });
};

exports.getUsersByQueryKey = getUsersByQueryKey;
