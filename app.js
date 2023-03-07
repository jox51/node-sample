//modules
const express = require("express")
const app = express()
const taskRouter = require("./routes/tasks")
const connectDB = require("./db/connection")
require("dotenv").config()
const notFound = require("./middleware/notFound")
const errorHandler = require("./middleware/errorHandlerMiddleware")

//middleware
// serve static files
app.use(express.static("./public"))
// parse form data
// app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

//routes. First arg is path. Below route where we will perform our API ops
app.use("/api/v1/tasks", taskRouter)
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 4000

// server should be connected before db to prevent errors in the future
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`server listening on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
