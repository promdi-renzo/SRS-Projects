const {
  getAllUser,
  getUser,
  adduser,
  updateUser,
  deleteUser,
} = require("../app/controllers/user.controller");
const express = require("express");
const router = express.Router();

router.route("/").get(getAllUser).post(adduser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
