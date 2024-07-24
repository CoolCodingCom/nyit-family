const express = require("express");
const { getUsersByQueryKey } = require("../controllers/search-controller/getUsersByQueryKey");


router = express.Router();

router.get("/:qkey", getUsersByQueryKey);

module.exports = router;