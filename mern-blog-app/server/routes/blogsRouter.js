const express = require('express')
const router = express.Router()
const validateUser = require('../middlewares/AuthorizeUser')

router.get('/explore', validateUser, (req, res) => {
    res.send('explore blogs')
})

router.get('/:id', (req, res) => {
    res.send(req.params.id)
})


module.exports = router