const express = require("express");
const {
  getPosts,
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

router.get("/", getPosts);

router.post("/", createPost);

router.delete("/delete", deletePost);

router.post("/comment", createComment);

router.post("/add-justrepost", addJustRepost);

router.delete("/remove-justrepost", removeJustRepost);

router.post("/quote", createQuote);

router.post("/add-like", addLike);

router.delete("/remove-like", removeLike);

router.post("/add-bookmark", addBookmark);

router.delete("/remove-bookmark", removeBookmark);

module.exports = router;
