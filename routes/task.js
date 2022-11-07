import express from "express";
export const router = express.Router();

import {
  getAllTasks, //getAllUsers --Top5
  createTask, //createUser
  getTask, //getUser
  updateTask, //updateUser
  deleteTask,
} from "../controllers/tasks.js";
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

// router.route("/").get((req, res) => {
//   res.send("all items");
// });
