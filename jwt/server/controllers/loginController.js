const { UserModel } = require('../models/users')
const bcrypt = require('bcrypt')


async function loginController(req, res) {
    // Getting the req body
    const { name, email, password } = req.body

    // Checking if the user's email and name are valid
    const user = await UserModel.findOne({ email, name })
    if (!user) res.status(400).send('Email is not found')

    // Checking if the password hash is the same as the one entered by the user when login
    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) return res.status(400).send('Invalid password')

    res.status(200).send(user)
}

module.exports = loginController