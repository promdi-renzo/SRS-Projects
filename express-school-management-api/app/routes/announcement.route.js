const router = require("express").Router();
const {
  getAllAnnouncement,
  getAnnouncementById,
  addAnnouncement,
  updateAnnouncement,
  deleteAnnouncementById,
} = require("./controllers/announcement.controller");

router.route("/").get(getAllAnnouncement).post(addAnnouncement);
router
  .route("/:id")
  .get(getAnnouncementById)
  .patch(updateAnnouncement)
  .delete(deleteAnnouncementById);

module.exports = router;
