const { UserModel } = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function loginController(req, res) {
    // Getting the req body
    const { name, email, password } = req.body

    // Checking if the user's email and name are valid
    UserModel.findOne({ email }).then(user => {
        if (!user) {
            return res.status(400).send("User doesn't exist")
        }
        // Checking if the password hash is the same as the one entered by the user when login
        bcrypt.compare(password, user.password, (err, data) => {
            if (err) throw err
            if (data) {
                const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET)
                res.status(200).send(token)
            } else {
                res.status(400).send('Invalid password')
            }

        })

    })
}

module.exports = loginController