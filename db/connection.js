// makes connection to mongodb simpler and cleaner
const mongoose = require("mongoose")

// connection string from mongo db Atlas, add your db name before the ? and after /, ie. 03-TASK-MANAGER

// options passed only to eliminate deprec warning in this version of mongoose. In version 6, wont need to pass options
const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
}

module.exports = connectDB
