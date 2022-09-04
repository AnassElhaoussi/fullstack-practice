const { UserModel } = require('../models/users')
const bcrypt = require('bcrypt')


async function loginController(req, res) {
    const { name, email, password } = req.body

    const user = await UserModel.findOne({ email })
    if (!user) res.status(400).send('Email is not found')

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) return res.status(400).send('Invalid password')

    res.status(200).send(user)
}

module.exports = loginController