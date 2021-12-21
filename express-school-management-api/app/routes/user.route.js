import { Router } from "express";
import {
  getAllUser,
  getUserById,
  addUser,
  updateUser,
  deleteUserById,
} from "../controllers/user.controller.js";
const router = Router();

router.route("/").get(getAllUser).post(addUser);
router.route("/:id").get(getUserById).patch(updateUser).delete(deleteUserById);

export default router;
