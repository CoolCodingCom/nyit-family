const Post = require("../../models/posts.js");
const User = require("../../models/users.js");

const addLike = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    await Post.findByIdAndUpdate(postId, { $push: { likes: userId } });
    await User.findByIdAndUpdate(userId, { $push: { liked: postId } });
    res.status(200).json({ message: "Like added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeLike = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    await Post.findByIdAndUpdate(postId, { $pull: { likes: userId } });
    await User.findByIdAndUpdate(userId, { $pull: { liked: postId } });
    res.status(200).json({ message: "Like removed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addLike,
  removeLike,
};
