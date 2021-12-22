import { Router } from "express";
import {
  getAllAssignment,
  getAssignmentById,
  addAssignment,
  updateAssignment,
  deleteAssignmentById,
} from "../controllers/assignment.controller.js";
const router = Router();
router.route("/").get(getAllAssignment).post(addAssignment);
router
  .route("/:id")
  .get(getAssignmentById)
  .patch(updateAssignment)
  .delete(deleteAssignmentById);

export default router;
