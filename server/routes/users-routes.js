const express = require("express");

const usersController = require("../controllers/users-controller");

const router = express.Router();



router.get("/", usersController.getUsers);


module.exports = router;
