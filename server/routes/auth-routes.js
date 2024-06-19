const express = require("express");
const passport = require("passport");

const keys = require("../config/keys");

const {
  loginWithThirdParty,
} = require("../controllers/auth-controller/loginWithThirdParty");

const authenticateToken = require("../controllers/auth-controller/authenticateToken");

router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: keys.frontend.FRONTEND_URL + "?google=true",
  })
);

router.get("/google/login/success", loginWithThirdParty);

router.post("/token", authenticateToken);

module.exports = router;
