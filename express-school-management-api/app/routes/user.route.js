const router = require("express").Router();
const {
  getAllUser,
  getUserById,
  addUser,
  updateUser,
  deleteUserById,
} = require("./controllers/user.controller");

router.route("/").get(getAllUser).post(addUser);
router.route("/:id").get(getUserById).patch(updateUser).delete(deleteUserById);

module.exports = router;
