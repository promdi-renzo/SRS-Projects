import auth from "../middlewares/auth.js";
import { Router } from "express";
import {
  getAllUser,
  getUserById,
  addUser,
  updateUser,
  deleteUserById,
  authUser,
} from "../controllers/user.controller.js";

const router = Router();
router.route("/auth").post(authUser);
router.route("/").get(auth.authenticate, getAllUser).post(addUser);
router
  .route("/:id")
  .get(auth.authenticate, getUserById)
  .patch(auth.authenticate, updateUser)
  .delete(auth.authenticate, deleteUserById);

export default router;
