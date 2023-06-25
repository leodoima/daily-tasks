const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Got a GET request USERS!')
})


module.exports = router