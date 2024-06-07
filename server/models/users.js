const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, required: true },
  isValid: { type: Boolean, required: true },
  uniqueString: { type: String, required: true },
  liked: [{ type: mongoose.Types.ObjectId, ref: "Post" }],
  bookmarked: [{ type: mongoose.Types.ObjectId, ref: "Post" }],
  justReposts: { type: mongoose.Schema.Types.Mixed, default: {} },
});

module.exports = mongoose.model("Users", userSchema);
