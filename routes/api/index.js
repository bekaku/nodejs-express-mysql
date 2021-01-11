const router = require("express").Router();
const auth = require("../../middleware/auth");
const permit = require("../../middleware/permit");

const Main = require("../../controllers/MainController");
const Test = require("../../controllers/TestController");
const Role = require("../../controllers/RoleController");

// router.use("/", require("./MainController"));
router.get("/", Main.index);
router.get("/test", Test.index);
// router.use("/role", require("./RoleController"));
router.get("/role", auth.optional, permit("role_list"), Role.index);

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
