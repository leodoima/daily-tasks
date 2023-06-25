const express = require('express')
const { route } = require('./users')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Got a GET request!')
})

router.post('/', (req, res) => {
    res.send('Got a POST request')
})

router.put((req, res) => {
    res.send('Got a PUT request at /user')
})

router.delete((req, res) => {
    res.send('Got a DELETE request at /user')
})


module.exports = router