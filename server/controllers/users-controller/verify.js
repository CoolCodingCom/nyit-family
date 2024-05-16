const HttpError = require("../../models/http-error");

const User = require("../../models/users");

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

  if (verifiedUser.isValid === true) {
    return next(new HttpError("The email has already been verified", 422));
  }

  // if (verifiedUser.uniqueString === uniqueString) {
  //   verifiedUser.isValid = true;
  // } else {
  //   return next(new HttpError("InValid confirmatiion link", 410)); // link expiration should also be taken into consideration
  // }
  verifiedUser.isValid = true;

  try {
    await verifiedUser.save();
  } catch (error) {
    return next(error);
  }

  res.status(201).json({ userId: verifiedUser.id, email: verifiedUser.email });
};

exports.verify = verify;
