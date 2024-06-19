const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const authenticateToken = (req, res) => {
  const { token } = req.body;
  if (!token) {
    res.status(500).json({ message: "Missing token" });
  }
  jwt.verify(token, keys.token.PRIVATE_KEY, (err) => {
    if (err) {
      return res.status(200).json({ isValid: false });
    }
    return res.status(200).json({ isValid: true });
  });
};

module.exports = authenticateToken;
