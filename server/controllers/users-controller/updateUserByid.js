const User = require("../../models/users");
const deleteImage = require("../../util/deleteImage");
// const keys = require("../../config/keys");

const updateUserById = async (req, res, next) => {
  const userId = req.params.uid;
  const { name } = req.body;
  const newImage = req.file;
  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    user.name = name;

    if (newImage) {
      deleteImage(user.image);
      user.image = newImage.path;
    }

    const updatedUser = await user.save();

    res
      .status(200)
      .json({ message: "User updated successfully.", user: updatedUser });
  } catch (error) {
    next(error);
  }
};

exports.updateUserById = updateUserById;
