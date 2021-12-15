const express = require("express");
const router = express.Router();

const {
  getAllTask,
  getTask,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTask).post(addTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
