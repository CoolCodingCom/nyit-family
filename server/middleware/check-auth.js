const jwt = require("jsonwebtoken");

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
    const decodedToken = jwt.verify(token, ***REMOVED***);
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (error) {
    return next(new Error("Authorization Failed."));
  }
};
