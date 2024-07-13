const express = require("express");
const { getUsersByQueryKey } = require("../controllers/search-controller/getUsersByQueryKey");
const keys = require("../config/keys");


router = express.Router();

router.get("/:qkey", getUsersByQueryKey);

module.exports = router;