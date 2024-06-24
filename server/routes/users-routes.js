const express = require("express");
const { check } = require("express-validator");
const checkToken = require("../middleware/check-token");
const { getUsers } = require("../controllers/users-controller/getUsers");
const { signup } = require("../controllers/users-controller/signup");
const { verify } = require("../controllers/users-controller/verify");
const { login } = require("../controllers/users-controller/login");
const { getUserById } = require("../controllers/users-controller/getUserByid");

const router = express.Router();

router.get("/", getUsers);

router.get("/:uid", getUserById);

router.get("/verify/:uniqueid", verify);

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
  signup
);

router.post("/login", login);

/* for testing use
router.use(checkToken);
router.get("/tokentester", usersController.tokenTester);
*/

module.exports = router;
