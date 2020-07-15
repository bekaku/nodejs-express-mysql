const router = require("express").Router();

router.use("/", require("./MainController"));
router.use("/role", require("./RoleController"));

router.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "ValidationError") {
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce((errors, key) => {
        errors[key] = err.errors[key].message;

        return errors;
      }, {}),
    });
  }

  return next(err);
});

module.exports = router;