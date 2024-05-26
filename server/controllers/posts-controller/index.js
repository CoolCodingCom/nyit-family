const Post = require("../../models/posts.js");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const { author, content } = req.body;
    await Post.create({ author, content });
    res.status(200).json({ message: "Post created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createComment = async (req, res) => {
  try {
    const { author, content, parentPost } = req.body;
    const newComment = await Post.create({ author, content, parentPost });
    await Post.findByIdAndUpdate(parentPost, {
      $push: { comments: newComment._id },
    });
    res.status(200).json({ message: "Comment created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { postId, userId } = req.body;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    // If this is a quote, decrement 1 from original post's repost list
    if (post.isQuote) {
      const originalPost = await Post.findById(post.originalPost);
      // Just if original post exists, do some operations to maintain states of that
      if (originalPost) {
        const repostIndex = originalPost.reposts.findIndex((repost) =>
          repost.userId.equals(userId)
        );
        if (repostIndex !== -1) {
          if (originalPost.reposts[repostIndex].count > 1) {
            // Decrement the count if it's greater than 1
            originalPost.reposts[repostIndex].count -= 1;
          } else {
            // Remove the repost object if count is 1
            originalPost.reposts.splice(repostIndex, 1);
          }
          await originalPost.save();
        } else {
          console.log(
            "original post already has no repost records for this quote!"
          );
        }
      }
    }
    // If this has a parent post, delete this post's id from parent post's comments list
    if (post.parentPost) {
      const parentPost = await Post.findById(post.parentPost);
      if (parentPost) {
        const index = parentPost.comments.indexOf(postId);
        if (index !== -1) {
          parentPost.comments.splice(index, 1);
          await parentPost.save();
        } else {
          console.log(
            "original post already has no comment record for this post!"
          );
        }
      }
    }
    await Post.deleteOne({ _id: postId });
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPosts,
  createPost,
  deletePost,
  createComment,
};
