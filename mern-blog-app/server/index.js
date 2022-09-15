const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const blogsRouter = require('./routes/blogsRouter')
const {ValidateUser} = require('./models/Users')
const loginController = require('./controllers/login')
const registerController = require('./controllers/register')
const refreshTokenController = require('./controllers/refresh')
const validationMiddleware = require('./middlewares/validationMiddleware')

require('dotenv').config()

const PORT = process.env.PORT || 5000
const app = express()
const refreshTokens = {}

mongoose.connect(process.env.MONGO_CONNECTION_URL)

app.use(cors())
app.use(express.json())
app.use('/blogs', blogsRouter)

app.get('/', (req, res) => {
    res.send('Blog app API')
})

app.post('/register', validationMiddleware(ValidateUser) ,registerController)

app.post('/login', validationMiddleware(ValidateUser) ,(req, res) => 
loginController(req, res, refreshTokens))

app.post('/refresh', (req, res) => 
refreshTokenController(req, res, refreshTokens))

app.listen(PORT, console.log('Server listening on port 5000'))