const express = require('express')
const auth = require('../middleware/auth')

const AuthUserCtrl = require('../controllers/auth-controller')

const router = express.Router()
router.post('/', AuthUserCtrl.authUser)
router.post('/user', auth, AuthUserCtrl.getUserData)

module.exports = router