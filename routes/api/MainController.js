var router = require("express").Router();
const auth = require("../../middleware/auth");
router.get("/", auth.optional, (req, res, next) => {
  return res.json({
    message: res.t("welcome", "chanavee", "bekaku"),
    dir : __dirname
  });
});

module.exports = router;
