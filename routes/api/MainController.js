var router = require("express").Router();
const auth = require("../../middleware/auth");
router.get("/", auth.optional, (req, res, next) => {
  return res.json({ msg: res.t('welcome', 'chanavee', 'bekaku')});
});

module.exports = router;
