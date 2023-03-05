//modules
const express = require("express")
const app = express()
const taskRouter = require("./routes/tasks")
const connectDB = require("./db/connection")
require("dotenv").config()

//middleware
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

//routes
app.use("/api/v1/tasks", taskRouter)

app.get("/hello", (req, res) => {
  res.send("Task Manager app")
})

const port = 4000

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
