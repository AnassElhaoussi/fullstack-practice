const User = require('../models/users.js')
const Joi = require('@hapi/joi')

const schema = Joi.object({
    name: Joi.string().min(4).max(12).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(6).required()
})

async function registerController(req, res) {
    const { name, email, password } = req.body
    const user = new User({ name, email, password })

    const { error } = schema.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const savedUser = await User.create({ name, email, password })
        res.status(200).send(savedUser)
    } catch {
        res.send('something went wrong')
    }
}




module.exports = registerController