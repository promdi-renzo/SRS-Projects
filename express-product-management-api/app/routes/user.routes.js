const router = require("express").Router();
const auth = require("../middlewares/auth");
const {
  getAllUser,
  getUserById,
  addUser,
  updateUser,
  deleteUserById,
  authUser,
} = require("../controllers/user.controller");

router.route("/auth").post(authUser);
router.route("/").get(auth.authenticate, getAllUser).post(addUser);
router
  .route("/:id")
  .get(auth.authenticate, getUserById)
  .patch(auth.authenticate, updateUser)
  .delete(auth.authenticate, deleteUserById);

module.exports = router;
