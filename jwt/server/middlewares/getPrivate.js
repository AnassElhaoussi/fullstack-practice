const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    const token = req.header('x-access-token')

    if (!token) return res.status(401).send('access denied')

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
    } catch {
        res.status(400).send('Invalid token')
    }
}