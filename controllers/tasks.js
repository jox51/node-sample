const Task = require("../models/Task")
const asyncWrapper = require("../middleware/asyncWrapper")
const { createCustomError } = require("../errors/custom-errors")

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({})
  res.status(200).json({ tasks })
})

const createTask = asyncWrapper(async (req, res) => {
  // invoking the Task create method creates a document in db
  const task = await Task.create(req.body)
  res.status(201).json({ task })
})

const getSingleTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const singleTask = await Task.findOne({ _id: taskID })
  if (!singleTask) {
    return next(createCustomError(`No task with ${taskID} found`, 404))
    // return res.status(404).json({ msg: `No task with ${taskID} found` })
  }
  res.status(200).json({ singleTask })
})

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const taskBody = req.body
  const task = await Task.findOneAndUpdate({ _id: taskID }, taskBody, {
    new: true,
    runValidators: true
  })
  console.log(task)
  if (!task) {
    return next(createCustomError(`No task with ${taskID} found`, 404))
  }
  res.status(200).json({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task with ${taskID} found`, 404))
  }
  res.status(200).json({ task })
})

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask
}
