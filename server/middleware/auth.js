const jwt = require('jsonwebtoken')
const jwt_secret = process.env.JWT_SECRET;

function auth(req, res, next){
    const token = req.header('x-auth-token');

    if(!token) return res.status(401).json({
        error: 'Unauthorized user',
    })

    try {
        const decoded = jwt.verify(token, jwt_secret);
        req.user = decoded;
        next();
    } catch(e) {
        res.status(400).json({
            error: 'Token invalid.',
        })
    }
    

}

module.exports = auth;