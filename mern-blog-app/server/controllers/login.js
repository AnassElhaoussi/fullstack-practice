const {UserModel} = require('../models/Users')
const bcrypt = require('bcrypt')

const loginController = async (req, res) => {
    // Getting the body
    const {username, email, password} = req.body
    
    // Checking if the current email and username 
    // exists in some collection in the database
    const foundUser = await UserModel
    .findOne({username ,email})

    if(!foundUser) return 
    res.status(400).send('No user found')

    // Checking if the password is the same
    const isSamePassword = await bcrypt
    .compare(password, foundUser.password)

    if(!isSamePassword) return res.status(400).send('Password is wrong')

    // Sending the current user object if the request succeded
    res.send(foundUser)
}

module.exports = loginController