const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const blogsRouter = require('./routes/blogsRouter')

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Blog app API')
})

app.use('/blogs', blogsRouter)

app.listen(PORT, console.log('Server listening on port 5000'))