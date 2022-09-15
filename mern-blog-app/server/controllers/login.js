const {UserModel} = require('../models/Users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const randtoken = require('rand-token')

const loginController = async (req, res, refreshTokens) => {
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
                refreshToken
        })

}

module.exports = loginController