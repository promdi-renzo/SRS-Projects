import { Router } from "express";
import {
  getAllActivity,
  getActivityById,
  addActivity,
  updateActivity,
  deleteActivityById,
} from "../controllers/activity.controller.js";

const router = Router();
router.route("/").get(getAllActivity).post(addActivity);
router
  .route("/:id")
  .get(getActivityById)
  .patch(updateActivity)
  .delete(deleteActivityById);

export default router;
