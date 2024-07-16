const fs = require("fs");
const keys = require("../config/keys");

const deleteImage = (imageUrl) => {
  const url = new URL(imageUrl);
  const backendUrl = keys.email.BACKEND_URL;

  if (url.origin !== backendUrl) return;
  const path = url.pathname;
  const newPath = path.startsWith("/") ? path.slice(1) : path;

  if (newPath === "uploads/defaultAvatar.svg") return;

  const decodedPath = decodeURIComponent(newPath);

  fs.unlink(decodedPath, (err) => {
    if (err) {
      console.log(err);
    }
  });
};
module.exports = deleteImage;
