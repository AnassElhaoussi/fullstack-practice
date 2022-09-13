const { UserModel } = require("../models/Users")
const bcrypt = require('bcrypt')

const registerController = async (req, res) => {
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
}

module.exports = registerController