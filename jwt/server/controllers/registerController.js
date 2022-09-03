const { UserModel } = require('../models/users')
const bcrypt = require('bcrypt')


async function registerController(req, res) {
    // Getting the request body
    const { name, email, password } = req.body
    // Hashing user passwords
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    // Creating a new instance of the current user
    const user = new UserModel({ name, email, password: hashedPassword })

    try {
        // Saving the current user on the db
        const savedUser = await user.save()
        res.status(200).send(savedUser)
    } catch (err) {
        // Filtering error types
        if (!name || !email || !password) return res.status(400).send('Credentials are not complete')
        else return res.status(400).send('Email is already in use')
    }
}


module.exports = registerController