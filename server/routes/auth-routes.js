const express = require("express");
const passport = require("passport");

router = express.Router();

router.get("/google", passport.authenticate('google', {scope: ['profile', 'email']}));

router.get("/google/callback", passport.authenticate('google'), (req, res) => {
  res.json({user: req.user});
  // send user informationa and token back
});

module.exports = router;

