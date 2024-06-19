const express = require("express");
const upload = require("../middleware/upload-multer");
const checkAuth = require("../middleware/check-auth");
const {
  getAllPosts,
  getHomePosts,
  getPostByAuthor,
  getRepostByUser,
  getPostByUser,
  createPost,
  deletePost,
  createComment,
} = require("../controllers/posts-controller/index");

const {
  addJustRepost,
  removeJustRepost,
} = require("../controllers/posts-controller/repost");

const { createQuote } = require("../controllers/posts-controller/quote");

const { addLike, removeLike } = require("../controllers/posts-controller/like");

const {
  addBookmark,
  removeBookmark,
} = require("../controllers/posts-controller/bookmark");

const router = express.Router();

router.use(checkAuth);

router.get("/", getAllPosts);

router.get("/home", getHomePosts);

router.get("/:id", getPostByAuthor);

router.get("/reposts/:id", getRepostByUser);

router.get("/all/:id", getPostByUser);

// router.post("/", createPost);

router.post("/", upload.array("media", 4), createPost);

router.delete("/delete/:pid", deletePost);

router.post("/comment", createComment);

router.post("/add-justrepost", addJustRepost);

router.delete("/remove-justrepost", removeJustRepost);

router.post("/quote", createQuote);

router.post("/add-like", addLike);

router.delete("/remove-like", removeLike);

router.post("/add-bookmark", addBookmark);

router.delete("/remove-bookmark", removeBookmark);

module.exports = router;
