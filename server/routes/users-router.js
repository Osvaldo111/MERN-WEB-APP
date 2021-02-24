const express = require('express')

const UserCtrl = require('../controllers/user-controller')

const router = express.Router()
router.post('/', UserCtrl.registerUser);


module.exports = router