import { Router } from "express";
import {
  getAllAnnouncement,
  getAnnouncementById,
  addAnnouncement,
  updateAnnouncement,
  deleteAnnouncementById,
} from "../controllers/announcement.controller.js";

const router = Router();
router.route("/").get(getAllAnnouncement).post(addAnnouncement);
router
  .route("/:id")
  .get(getAnnouncementById)
  .patch(updateAnnouncement)
  .delete(deleteAnnouncementById);

export default router;
