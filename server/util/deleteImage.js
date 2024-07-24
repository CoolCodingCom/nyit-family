const fs = require("fs");
const keys = require("../config/keys");

const deleteImage = (imageUrl) => {
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) return;

  if (imageUrl === "uploads/defaultAvatar.svg") return;

  const decodedPath = decodeURIComponent(imageUrl);

  fs.unlink(decodedPath, (err) => {
    if (err) {
      console.log(err);
    }
  });
};
module.exports = deleteImage;
