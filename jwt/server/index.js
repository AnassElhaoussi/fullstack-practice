const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcrypt')
require('dotenv').config()
const loginController = require('./controllers/loginController')
const registerController = require('./controllers/registerController')


const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())
mongoose.connect(process.env.MONGO_DB_CONNECTION_URL)

app.post('/api/register', registerController)

app.listen(PORT)