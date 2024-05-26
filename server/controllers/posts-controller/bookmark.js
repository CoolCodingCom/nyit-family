const Post = require("../../models/posts.js");
const User = require("../../models/users.js");

const addBookmark = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    await Post.findByIdAndUpdate(postId, { $push: { bookmarks: userId } });
    await User.findByIdAndUpdate(userId, { $push: { bookmarked: postId } });
    res.status(200).json({ message: "Bookmark added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeBookmark = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    await Post.findByIdAndUpdate(postId, { $pull: { bookmarks: userId } });
    await User.findByIdAndUpdate(userId, { $pull: { bookmarked: postId } });
    res.status(200).json({ message: "Bookmark removed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addBookmark,
  removeBookmark,
};
