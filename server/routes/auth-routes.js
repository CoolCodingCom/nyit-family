const express = require("express");
const passport = require("passport");

const { loginWithThirdParty } = require("../controllers/auth-controller/loginWithThirdParty");

router = express.Router();

router.get("/google", passport.authenticate('google', {scope: ['profile', 'email']}));

router.get("/google/callback", passport.authenticate('google', { successRedirect: keys.frontend.FRONTEND_URL }));

router.get("/google/login/success", loginWithThirdParty);

module.exports = router;