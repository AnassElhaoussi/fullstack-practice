const jwt = require('jsonwebtoken')

const validateUser = async (req, res, next) => {
    const token = req.headers['x-access-token']

    if(!token) return res.status(401).send('Unauthorized')
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err?.name === 'TokenExpiredError'){
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,
                {ignoreExpiration: true}
            )
            res.status(400).send('token expired')
        } else if(err){
            res.status(400).send('invalid token')
        } else {
            next()
        }
    })

}

module.exports = validateUser