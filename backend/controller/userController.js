const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')

// posting user 
const registerUser = asyncHandler( async (req, res) => {

    const {name, email ,password} = req.body

    if(!name || !email || password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    res.json({message: 'Register User'})
})
// login user 
const loginUser = asyncHandler( async (req, res) => {
    res.json({message: 'logged inn User'})
})

// current logged in use
const getMe = asyncHandler( async (req, res) => {
    res.json({message: 'am the data  User'})
})



module.exports = {
    registerUser,
    loginUser,
    getMe,
}