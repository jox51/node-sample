const mongoose = require("mongoose")

// an instance of this schema creates a document in MongoDB
// only properties passed in schema will be sent to db
// data should be validated to keep db tight
// SCHEMA invoked in controllers
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more than to chars"]
  },
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model("Task", TaskSchema)
