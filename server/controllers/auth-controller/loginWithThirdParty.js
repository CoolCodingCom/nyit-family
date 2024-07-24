const jwt = require("jsonwebtoken");
// const keys = require("../../config/keys");

const loginWithThirdParty = (req, res) => {
    const desiredUser = req.user;

    let token;
    try {
      token = jwt.sign(
        { userId: desiredUser._id, email: desiredUser.email },
        process.env.TOKEN_PRIVATE_KEY,
        { expiresIn: "1h" }
      );
    } catch (error) {
      return next(error);
    }
  
    res.json({
      userId: desiredUser._id,
      email: desiredUser.email,
      token: token,
    });
}

exports.loginWithThirdParty = loginWithThirdParty;