const express = require("express");
const passport = require("passport");

const authController = require("../controllers/auth-controller");

router = express.Router();

router.get("/google", passport.authenticate('google', {scope: ['profile', 'email']}));

router.get("/google/callback", passport.authenticate('google'), authController.loginWithThirdParty);

module.exports = router;