const router = require("express").Router();
const {
  getAllAssignment,
  getAssignmentById,
  addAssignment,
  updateAssignment,
  deleteAssignmentById,
} = require("./controllers/assignment.controller");

router.route("/").get(getAllAssignment).post(addAssignment);
router
  .route("/:id")
  .get(getAssignmentById)
  .patch(updateAssignment)
  .delete(deleteAssignmentById);

module.exports = router;
