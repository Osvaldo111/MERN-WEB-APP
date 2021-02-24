const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = new Schema(
    {
        animal: { type: String, required: true },
        name: { type: String, required: true },
        image: { type: String },
        sex: { type: String, required: true },
        age: { type: Number},
    },
    { timestamps: true },
)

module.exports = mongoose.model('movies', Movie)