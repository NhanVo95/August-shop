const express = require("express");
const router = express.Router();

function exit(healthy) {
  return healthy ? process.exit(0) : process.exit(1);
}

router.get("/", function (req, res, next) {
  try {
    exit(true);
  } catch (error) {
    exit(false);
  }
});

module.exports = router;
