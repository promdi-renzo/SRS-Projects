import { Router } from "express";
import {
  getAllGrade,
  getGradeById,
  addGrade,
  updateGrade,
  deleteGradeById,
} from "../controllers/grade.controller.js";

const router = Router();
router.route("/").get(getAllGrade).post(addGrade);
router
  .route("/:id")
  .get(getGradeById)
  .patch(updateGrade)
  .delete(deleteGradeById);

export default router;
