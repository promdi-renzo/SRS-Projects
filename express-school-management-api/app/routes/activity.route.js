const router = require("express").Router();
const {
  getAllActivity,
  getActivityById,
  addActivity,
  updateActivity,
  deleteActivityById,
} = require("./controllers/activity.controller");

router.route("/").get(getAllActivity).post(addActivity);
router
  .route("/:id")
  .get(getActivityById)
  .patch(updateActivity)
  .delete(deleteActivityById);

module.exports = router;
