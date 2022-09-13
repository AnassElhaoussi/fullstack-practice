const express = require('express')
const router = express.Router()

router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

router.get('/explore', (req, res) => {
    res.send('explore blogs')
})

module.exports = router