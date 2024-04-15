const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  let token;
  try {
    token = req.headers.authorization.split(" ")[1]; // authorization: 'Bearer token'
    if (!token) {
      throw new Error("Authorization Failed.");
    }
    const decodedToken = jwt.verify(token, keys.token.PRIVATE_KEY);
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (error) {
    return next(new Error("Authorization Failed."));
  }
};
