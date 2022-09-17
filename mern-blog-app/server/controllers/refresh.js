const jwt = require('jsonwebtoken')
const {UserModel} = require('../models/Users')

const refresh = async (req, res, refreshTokens) => {
        const {username, email, password} = req.body
        const refreshToken = req.headers['refresh-token']

        console.log(refreshTokens[refreshToken])

        if(!refreshToken) res.status(401).send('unauthorized')
        const foundUser = await UserModel.findOne({username, email})

        if(
            (refreshTokens[refreshToken] === {username, email, id: foundUser._id})) {
                const user = {
                    username,
                    email,
                id: foundUser._id
            }

            const refToken = jwt.sign(user, 
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn: '30s'}
            )

            res.send('hello')
        }
        
}

module.exports = refresh