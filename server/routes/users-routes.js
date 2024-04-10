const express = require("express");
const { check } = require("express-validator");
const checkAuth = require("../middleware/check-auth");
const usersController = require("../controllers/users-controller");

const router = express.Router();

router.get("/", usersController.getUsers);

router.get("/verify/:uniqueid", usersController.verify);

router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isStrongPassword({
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    }),
  ],
  usersController.signup
);

router.post("/login", usersController.login);

/* for testing use
router.use(checkAuth);
router.get("/tokentester", usersController.tokenTester);
*/

module.exports = router;
