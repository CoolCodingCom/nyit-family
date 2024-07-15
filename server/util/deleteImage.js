const fs = require("fs");
const keys = require("../config/keys");

const deleteImage = (imageUrl) => {
  const url = new URL(imageUrl);
  const backendUrl = keys.email.BACKEND_URL;
  if (url.orgin !== backendUrl) return;
  const path = url.pathname;
  console.log(path);
  const newPath = path.startsWith("/") ? path.slice(1) : path;
  if (newPath === "uploads/defaultAvatar.svg") return;

  fs.unlink(newPath, (err) => {
    if (err) {
      console.log(err);
    }
  });
};
module.exports = deleteImage;
