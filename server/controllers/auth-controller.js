const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwt_secret = process.env.JWT_SECRET;

authUser = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
        return res.status(400).json({
            success: false,
            error: 'You must provide all fields',
        })
    }
    
    User.findOne({email})
        .then(user => {
            if(!user) {
                return res.status(400).json({
                    success: false,
                    error: 'User does not exist',
                })
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({
                        success: false,
                        error: 'Invalid Credentials',
                    })

                    jwt.sign(
                        {id: user.id},
                        jwt_secret,
                        { expiresIn: 3600 },
                        (err, token) => {
                            if(err) throw err
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    email: user.email
                                }
                            })
                        }
                    )
                })         
        })
}

getUserData = (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => {
            res.json(user);
        })
}

module.exports = {
    authUser,
    getUserData
}