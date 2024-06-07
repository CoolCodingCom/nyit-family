const Post = require("../../models/posts.js");

const createQuote = async (req, res) => {
  try {
    const { author, content, originalPost } = req.body;

    const post = await Post.findById(originalPost);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    const repostIndex = post.reposts.findIndex((repost) =>
      repost.userId.equals(author)
    );
    if (repostIndex !== -1) {
      // Increment the count if userId is already in reposts
      post.reposts[repostIndex].count += 1;
    } else {
      // Add new repost object if userId is not in reposts
      post.reposts.push({ userId: author, count: 1 });
    }
    await post.save();
    await Post.create({ author, content, isQuote: true, originalPost });
    res.status(200).json({ message: "Quote created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createQuote,
};
