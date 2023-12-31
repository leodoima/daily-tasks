const express = require('express')

const tasksRoutes = require('./routes/tasks.routes')

const app = express()
const port = 3000


app.use(express.json())
app.use('/tasks', tasksRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})