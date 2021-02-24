const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const db = require('./db')
const itemRouter = require('./routes/item-router')
const userRouter = require('./routes/users-router')
const authRouter = require('./routes/auth-router')

const app = express()
const apiPort = 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', itemRouter)
app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))