const jwt = require('jsonwebtoken')
const {UserModel} = require('../models/Users')

const refresh = async (req, res, refreshTokens) => {
        const {username, email, password, refreshToken} = req.body

        const findUser = UserModel.findOne({username, email})
        if((refreshToken in refreshTokens) && 
        (refreshTokens[refreshToken] === {username, email})) {
            const user = {
                username,
                email,
                id: findUser._id
            }

            const token = jwt.sign(user, 
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn: 300}
            )

            res.send(token)
        }
}

module.exports = refresh