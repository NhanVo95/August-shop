const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const data = { content: "Hello, World!", type: "String" };

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
});

module.exports = router;
