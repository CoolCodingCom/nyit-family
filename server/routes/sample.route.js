const express = require("express");
const router = express.Router();
const {
  getSamples,
  createSample,
  getSample,
  updateSample,
  deleteSample,
} = require("../controllers/sample.controller.js");

router.get("/", getSamples);
router.get("/:id", getSample);

router.post("/", createSample);

// update a Sample
router.put("/:id", updateSample);

// delete a Sample
router.delete("/:id", deleteSample);

module.exports = router;
