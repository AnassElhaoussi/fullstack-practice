const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    // Getting the user's token from request headers
    const token = req.header('x-access-token')

    // Sending a 401 status error if the token doesn't exist
    if (!token) return res.status(401).send('access denied')

    // Verifying the given token using the token secret and sending an error if they didn't match
    try {
        const verifyToken = jwt.verify(token, process.env.TOKEN_SECRET)
        req.token = verifyToken
        next()
    } catch {
        res.status(400).send('Invalid token')
    }

}