const Joi = require('@hapi/joi')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        type: String
    }
})


const validateUser = (user) => {
    const schema = Joi.object({
        name: Joi.string().min(4).max(14).required(),
        email: Joi.string().email().min(5).max(500).required(),
        password: Joi.string().min(8).max(1024).required(),
    })
    return schema.validate(user)
}

const UserModel = mongoose.model('userscollection', UserSchema)

module.exports = {
    UserModel,
    validateUser
}