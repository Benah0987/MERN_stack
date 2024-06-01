const mongoose = require('mongoose')
const { timestamp } = require('rxjs')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Add name']
    },

    email: {
        type: String,
        required: [true, 'Add name']
    },
    password: {
        type: String,
        required: [true, 'Add name']
    },
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)