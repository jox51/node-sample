const express = require("express")
const router = express.Router()

//import controllers/functions to pass to routes
const {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask
} = require("../controllers/tasks")

router.get("/", getAllTasks)
router.post("/", createTask)
router.get("/:id", getSingleTask)
router.patch("/:id", updateTask)
router.delete("/:id", deleteTask)

module.exports = router
