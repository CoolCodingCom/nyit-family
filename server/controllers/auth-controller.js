const jwt = require("jsonwebtoken");

const loginWithThirdParty = (req, res) => {
    const desiredUser = req.user;

    let token;
    try {
      token = jwt.sign(
        { userId: desiredUser.id, email: desiredUser.email },
        ***REMOVED***,
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