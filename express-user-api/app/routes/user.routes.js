const {
  getAllUser,
  getUser,
  adduser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/auth");

router.route("/").get(authenticateToken, getAllUser).post(adduser);
router
  .route("/:id")
  .get(authenticateToken, getUser)
  .patch(authenticateToken, updateUser)
  .delete(authenticateToken, deleteUser);

module.exports = router;
