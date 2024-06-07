const mongoose = require("mongoose");
const { Schema } = mongoose;

const repostSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "Users", required: true },
  count: { type: Number, default: 1 },
});

const postSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    username: { type: String, required: true },
    content: { type: String, required: true, maxlength: 280 },
    isQuote: { type: Boolean, default: false },
    originalPost: { type: Schema.Types.ObjectId, ref: "Post" },
    parentPost: { type: Schema.Types.ObjectId, ref: "Post" },
    comments: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    reposts: [repostSchema],
    likes: [{ type: Schema.Types.ObjectId, ref: "Users" }],
    bookmarks: [{ type: Schema.Types.ObjectId, ref: "Users" }],
    media: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
