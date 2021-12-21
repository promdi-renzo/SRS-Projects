const router = require("express").Router();
const {
  getAllGrade,
  getGradeById,
  addGrade,
  updateGrade,
  deleteGradeById,
} = require("./controllers/grade.controller");

router.route("/").get(getAllGrade).post(addGrade);
router
  .route("/:id")
  .get(getGradeById)
  .patch(updateGrade)
  .delete(deleteGradeById);

module.exports = router;
