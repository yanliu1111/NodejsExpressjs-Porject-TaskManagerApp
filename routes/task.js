const express = require("express");
const router = express.Router();

const {
  getAllTasks, //getAllUsers --Top5
  createTask, //createUser
  getTask, //getUser
  updateTask, //updateUser
  deleteTask,
} = require("../controllers/tasks");
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

// router.route("/").get((req, res) => {
//   res.send("all items");
// });

module.exports = router;
