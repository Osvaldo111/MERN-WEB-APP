const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwt_secret = process.env.JWT_SECRET;

registerUser = (req, res) => {
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
            if(user) {
                return res.status(400).json({
                    success: false,
                    error: 'Email already exists',
                })
            }

            const newUser = new User({
                email,
                password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) console.log(err);
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
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
                        });
                })
            })            
        })
}

module.exports = {
    registerUser
}