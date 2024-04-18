const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const loginWithThirdParty = (req, res) => {
    const desiredUser = req.user;

    let token;
    try {
      token = jwt.sign(
        { userId: desiredUser.id, email: desiredUser.email },
        keys.token.PRIVATE_KEY,
        { expiresIn: "1h" }
      );
    } catch (error) {
      return next(error);
    }
  
    res.json({
      userId: desiredUser.id,
      email: desiredUser.email,
      token: token,
    });
}

exports.loginWithThirdParty = loginWithThirdParty;