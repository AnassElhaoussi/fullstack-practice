const { UserModel } = require('../models/users')
async function loginController(req, res) {
    const { name, email, password } = req.body
    try {
        const user = UserModel.findOne({ email })
        res.status(200).send(user)
    } catch {
        res.status(400).send('error getting this user')
    }
}

module.exports = loginController