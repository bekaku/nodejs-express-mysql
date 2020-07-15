const router = require("express").Router();

// const express = require("express");
// const router = express.Router();

const auth = require("../../middleware/auth");
const permit = require("../../middleware/permit");
const errHandler = require("../../middleware/errHandler");

const db = require("../../models");
const Role = db.Role;
const Op = db.Sequelize.Op;

// router.use(permission('role_list'));

/* GET todo listing. */
router.get(
  "/",
  auth.optional,
  permit("role_list"),
  errHandler(async (req, res, next) => {
    const roles = await Role.findAll({});
    return res.json({
      error: false,
      data: roles,
    });
  })
);

/* GET todo listing. */
router.post(
  "/",
  auth.optional,
  permit("role_add"),
  errHandler(async (req, res, next) => {
    const uid = req.payload.uid;
    const { name, description, status } = req.body;
    const role = await Role.create({
      name: name,
      description: description,
      status: status,
      created_by: uid,
      updated_by: uid,
    });
    return res.status(201).json({
      error: false,
      data: role,
      message: res.t("success.insertSuccesfull"),
    });
  })
);

/* update role. */
router.put(
  "/:id",
  auth.optional,
  permit("role_edit"),
  errHandler(async (req, res, next) => {
    const id = req.params.id;
    const uid = req.payload.uid;
    const { name, description, status } = req.body;
    await Role.update(
      {
        name: name,
        description: description,
        status: status,
        updated_by: uid,
      },
      { where: { id: id } }
    );
    return res.status(201).json({
      error: false,
      message: res.t("success.updateSuccesfull"),
    });
  })
);

/* DELETE role listing. */
router.delete(
  "/:id",
  auth.optional,
  permit("role_delete"),
  errHandler(async (req, res, next) => {
    const id = req.params.id;
    await Role.destroy({
      where: {
        id: id,
      },
    });
    return res.status(201).json({
      error: false,
      message: res.t("success.deleteSuccesfull"),
    });
  })
);

//find one
router.get(
  "/:id",
  auth.optional,
  permit("role_view"),
  errHandler(async (req, res, next) => {
    const id = req.params.id;
    const role = await Role.findByPk(id);
    return res.json({
      error: false,
      data: role,
    });
  })
);

module.exports = router;
