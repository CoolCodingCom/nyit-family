const jwt = require("jsonwebtoken");
// const keys = require("../config/keys");
const HttpError = require("../models/http-error");

const authenticateToken = (req, res, next) => {
  // if (req.method === "OPTIONS") {
  //   return next();
  // }
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return next(new HttpError("Missing token.", 401));
  }
  try {
    const decodedToken = jwt.verify(token, process.env.TOKEN_PRIVATE_KEY);
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (error) {
    return next(new HttpError("Authorization Failed.", 403));
  }
};

module.exports = authenticateToken;
