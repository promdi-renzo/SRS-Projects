import { Router } from "express";
import {
  getAllTask,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
} from "./controllers/task.controller.js";

const router = Router();
router.route("/").get(getAllTask).post(addTask);
router.route("/:id").get(getTaskById).patch(updateTask).delete(deleteTask);

export default router;
