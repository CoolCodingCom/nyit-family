const Post = require("../../models/posts.js");
const User = require("../../models/users.js");

const addJustRepost = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    const repostIndex = post.reposts.findIndex((repost) =>
      repost.userId.equals(userId)
    );
    if (repostIndex !== -1) {
      // Increment the count if userId is already in reposts
      post.reposts[repostIndex].count += 1;
    } else {
      // Add new repost object if userId is not in reposts
      post.reposts.push({ userId, count: 1 });
    }
    await post.save();
    await User.findByIdAndUpdate(userId, {
      $set: { [`justReposts.${postId}`]: new Date() },
    });
    res.status(200).json({ message: "Repost successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeJustRepost = async (req, res) => {
  try {
    const { postId, userId } = req.body;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const repostIndex = post.reposts.findIndex((repost) =>
      repost.userId.equals(userId)
    );
    if (repostIndex !== -1) {
      if (post.reposts[repostIndex].count > 1) {
        // Decrement the count if it's greater than 1
        post.reposts[repostIndex].count -= 1;
      } else {
        // Remove the repost object if count is 1
        post.reposts.splice(repostIndex, 1);
      }
    } else {
      console.log(
        "original post already has no repost records for this repost!"
      );
    }
    await post.save();
    await User.findByIdAndUpdate(userId, {
      $unset: { [`justReposts.${postId}`]: "" },
    });
    res.status(200).json({ message: "Unrepost successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addJustRepost,
  removeJustRepost,
};
