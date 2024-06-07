const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');

// Register user
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // Add logging
    console.log('Request body:', req.body);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }

    // Additional logic to create user can be added here

    res.json({ message: 'Register User' });
});

// Login user
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Logged in User' });
});

// Get current user
const getMe = asyncHandler(async (req, res) => {
    res.json({ message: 'User data' });
});

module.exports = {
    registerUser,
    loginUser,
    getMe,
};
