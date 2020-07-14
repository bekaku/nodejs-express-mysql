var router = require("express").Router();
var auth = require("../auth");
router.get("/welcome", auth.optional, (req, res, next) => {
  return res.json({ msg: "Welcom to home of api" });
});
module.exports = router;