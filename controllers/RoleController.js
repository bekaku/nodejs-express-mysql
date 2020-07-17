const errHandler = require("../middleware/errHandler");

const db = require("../models");
const Role = db.Role;
const Op = db.Sequelize.Op;

exports.index = errHandler(async (req, res, next) => {
  const roles = await Role.findAll({});
  return res.json({
    error: false,
    data: roles,
  });
});
