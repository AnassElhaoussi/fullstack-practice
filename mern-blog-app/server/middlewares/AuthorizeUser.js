const jwt = require('jsonwebtoken')

const validateUser = async (req, res, next) => {
    const token = req.headers['x-access-token']

    if(!token) return res.status(401).send('Unauthorized')
    const validateToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

    if(!validateToken) return res.status(400).send('token is not valid')
    
    next()
}

module.exports = validateUser