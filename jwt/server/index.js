const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const loginController = require('./controllers/loginController')
const registerController = require('./controllers/registerController')
const { validateUser } = require('./models/users')
const validateMiddleware = require('./middlewares/validateMiddleware')
const getPrivate = require('./middlewares/getPrivate')
const { UserModel } = require('./models/users')

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())
mongoose.connect(process.env.MONGO_DB_CONNECTION_URL)

app.post('/api/register', [validateMiddleware(validateUser)], registerController)
app.post('/api/login', [validateMiddleware(validateUser)], loginController)
app.get('/api/private', getPrivate, async(req, res) => {
    try {
        const currUser = await UserModel.find({ _id: req.token.id })
        res.status(200).send(currUser)
    } catch (err) {
        res.status(400).send('Cannot get this user')
    }

})


app.listen(PORT)