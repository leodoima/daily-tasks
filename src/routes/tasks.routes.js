const { Router } = require('express')
const { v4: uuidv4 } = require('uuid');

const tasksRoutes = Router()
const tasks = []


function validIfExistsTask(req, res, next) {
    const { id } = req.params;

    res.locals.task = tasks.find(t => t.id === id);

    if (!res.locals.task) {
        return res.status(400).json({ error: "Task not found" })
    }

    next()
};


tasksRoutes.use((req, res, next) => {
    const { account } = req.headers;

    console.log(`[${req.method}] - ${req.path} ${Date.now()}`)

    if (!account) {
        return res.status(401).json({ error: "User unauthorized" })
    }

    next()
})


tasksRoutes.get('/', (req, res) => {
    return res.send(tasks)
})

tasksRoutes.get('/:id', validIfExistsTask, (req, res) => {
    const task = res.locals.task;
    return res.send(task)
})

tasksRoutes.post('/', (req, res) => {
    const { description, appointment } = req.body;
    const { account } = req.headers;

    const task = {
        id: uuidv4(),
        account: account,
        description: description,
        appointment: appointment,
        created_at: new Date()
    }

    tasks.push(task)

    return res.status(201).json(task)
})

tasksRoutes.put('/:id', validIfExistsTask, (req, res) => {
    const { description, appointment } = req.body;
    const task = res.locals.task;

    task.description = description;
    task.appointment = appointment;

    tasks.push(task)

    return res.status(200).json(task)
})

tasksRoutes.delete('/:id', validIfExistsTask, (req, res) => {
    tasks.splice(res.locals.task, 1);
    return res.status(204).send();
})


module.exports = tasksRoutes