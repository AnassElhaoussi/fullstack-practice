const mongoose = require('mongoose')
const Joi = require('@hapi/joi')

const schema = mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
})

const UserModel = mongoose.model('users', schema)

const ValidateUser = (user) => {
    const joiSchema = Joi.object({
        username: Joi.string().min(4).max(12),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(100).required()
    })

    return joiSchema.validate(user)
}

module.exports = {
    UserModel,
    ValidateUser
}