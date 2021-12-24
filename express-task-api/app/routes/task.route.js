import { Router } from "express";
import {
  getAllTask,
  getTask,
  addTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

const router = Router();
router.route("/").get(getAllTask).post(addTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

export default router;
