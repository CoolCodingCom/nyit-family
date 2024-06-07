const Post = require("../../models/posts.js");
const User = require("../../models/users.js");
const mongoose = require("mongoose");

// Except this getAllPosts API, others sort from newest to oldest by default (for display purpose)
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getHomePosts = async (req, res) => {
  try {
    const homePosts = await Post.find({ parentPost: { $exists: false } }).sort({
      createdAt: -1,
    });
    res.status(200).json(homePosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPostByAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const posts = await Post.find({ author: id }).sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRepostByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    const justRepostsArray = Object.entries(user.justReposts).map(
      ([postId, repostTime]) => ({
        postId: new mongoose.Types.ObjectId(postId),
        repostTime,
      })
    );
    const repostedPosts = await Post.aggregate([
      { $match: { _id: { $in: justRepostsArray.map((item) => item.postId) } } },
      {
        $addFields: {
          isReposted: true,
          repostedBy: user.name,
          displayTime: {
            $arrayElemAt: [
              justRepostsArray.map((item) => item.repostTime),
              {
                $indexOfArray: [
                  justRepostsArray.map((item) => item.postId),
                  "$_id",
                ],
              },
            ],
          },
        },
      },
      { $sort: { displayTime: -1 } },
    ]);
    res.status(200).json(repostedPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPostByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    const justRepostsArray = Object.entries(user.justReposts).map(
      ([postId, repostTime]) => ({
        postId: new mongoose.Types.ObjectId(postId),
        repostTime,
      })
    );
    const postIds = Object.keys(user.justReposts).map(
      (postId) => new mongoose.Types.ObjectId(postId)
    );
    // Use mongoDB aggregation pipeline
    const combinedPosts = await Post.aggregate([
      {
        $facet: {
          authored: [
            // Author type is ObjectId, or this will not be filtered out
            { $match: { author: new mongoose.Types.ObjectId(id) } },
            { $addFields: { displayTime: "$createdAt" } },
          ],
          reposted: [
            {
              $match: {
                _id: { $in: postIds },
              },
            },
            {
              $addFields: {
                isReposted: true,
                repostedBy: user.name,
                displayTime: {
                  $arrayElemAt: [
                    justRepostsArray.map((item) => item.repostTime),
                    {
                      $indexOfArray: [
                        justRepostsArray.map((item) => item.postId),
                        "$_id",
                      ],
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      { $project: { combined: { $concatArrays: ["$authored", "$reposted"] } } },
      { $unwind: "$combined" },
      { $replaceRoot: { newRoot: "$combined" } },
      { $sort: { displayTime: -1 } },
    ]);

    res.status(200).json(combinedPosts);
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
    const parent = await Post.findById(parentPost);
    if (parent) {
      const newComment = await Post.create({ author, content, parentPost });
      parent.comments.push(newComment._id);
      await parent.save();
    } else {
      return res
        .status(404)
        .json({ message: "The post you are commenting on does not exist!" });
    }
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
  getAllPosts,
  getHomePosts,
  getPostByAuthor,
  getRepostByUser,
  getPostByUser,
  createPost,
  deletePost,
  createComment,
};
