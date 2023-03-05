const Task = require("../models/Task")

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
    res.status(200).json({ tasks })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const createTask = async (req, res) => {
  try {
    // invoking the Task create method creates a document in db
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const singleTask = await Task.findOne({ _id: taskID })
    if (!singleTask) {
      return res.status(404).json({ msg: `No task with ${taskID} found` })
    }
    res.status(200).json({ singleTask })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const updateTask = (req, res) => {
  res.json({ id: `${req.params.id} updated` })
}
const deleteTask = (req, res) => {
  res.send("delete Tasks")
}

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask
}
