const express = require('express')
const app = express()
const port = 3000

const tasks = require('./routes/tasks')

app.use(express.json())
app.use('/tasks', tasks)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})