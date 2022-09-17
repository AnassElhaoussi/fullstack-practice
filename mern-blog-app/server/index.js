const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const blogsRouter = require('./routes/blogsRouter')
const {ValidateUser, UserModel} = require('./models/Users')
const validationMiddleware = require('./middlewares/validationMiddleware')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const randtoken = require('rand-token')

require('dotenv').config()

const PORT = process.env.PORT || 5000
const app = express()
const refreshTokens = {}

console.log(refreshTokens)

mongoose.connect(process.env.MONGO_CONNECTION_URL)

app.use(cors())
app.use(express.json())
app.use('/blogs', blogsRouter)


app.get('/', (req, res) => {
    res.send('Blog app API')
})

app.post('/register', [validationMiddleware(ValidateUser)] ,async (req, res) => {
    // Getting the req body and generating both the salt and hashed password
    const { username,
            email,
            password
        } = req.body
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, salt)

    // Mongodb schema validation will work if the email is duplicated
    // else the new user will be saved in the db
    try {
        const newUser = new UserModel({
            username,
            email, 
            password: passwordHash
        })
        const user = await newUser.save()
        res.send(user)
    } catch {
        res.status(400).send('email already in use')
    }
})

app.post('/login', [validationMiddleware(ValidateUser)] , async (req, res) => {

    // Getting the body
    const {username, email, password} = req.body
    
    // Checking if the current email and username 
    // exists in some collection in the database
    const foundUser = await UserModel
    .findOne({username ,email})
    
    if(!foundUser) return res.status(400).send('No user found')
    
    // Checking if the password is the same
    const isSamePassword = await bcrypt
    .compare(password, foundUser.password)
    
    if(!isSamePassword) return res.status(400).send('Password is wrong')
    // Generating a json web token
    const token = jwt.sign({username, email, id: foundUser._id},
    process.env.ACCESS_TOKEN_SECRET,
    {expiresIn: '40s'})
    
    const refreshToken = randtoken.uid(256)
    refreshTokens[refreshToken] = {username, email, id: foundUser._id}
    
    res.status(200).send({
            token,
            refreshTokens
    })
})

app.post('/refresh', async (req, res) => {
    const {username, email, password, refreshTokens} = req.body
    const refreshToken = req.headers['refresh-token']

    
    if(!refreshToken) res.status(401).send('unauthorized')
    const foundUser = await UserModel.findOne({username, email})

    if((JSON.stringify(refreshTokens[refreshToken]) === 
    JSON.stringify({username, email, id: foundUser.id}))) {
            const user = {
                username,
                email,
                id: foundUser._id
        }

        const refToken = jwt.sign(user, 
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '40s'}
        )

        res.send(refToken)
    }
    
})


app.listen(PORT, console.log('Server listening on port 5000'))