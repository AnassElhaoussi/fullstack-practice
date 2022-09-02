const { UserModel } = require('../models/users')

async function registerController(req, res) {
    const { name, email, password } = req.body
    const user = new UserModel({ name, email, password })

    try {
        const savedUser = await user.save()
        res.status(200).send(savedUser)
    } catch (err) {
        if (!name || !email || !password) return res.status(400).send('Credentials are not complete')
        else return res.status(400).send('Email is already in use')
    }
}




module.exports = registerController