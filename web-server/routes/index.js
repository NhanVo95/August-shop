var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("calendar", { title: "PMO - Đăng ký hỗ trợ" });
});

router.get("/account", function (req, res, next) {
  res.render("account", { title: "PMO - Đăng ký hỗ trợ" });
});

module.exports = router;
