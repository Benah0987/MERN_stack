const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');

// Register user
const registerUser = asyncHandler(async (req, res) => {
    const {email, name , password} = req.body

    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }
   
    // const check if user exists
     // Check if user exists
     const userExists = await User.findOne({ email });

     if (userExists) {
         res.status(400);
         throw new Error('User already exists');
     }

     // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }

    
});

// Login user
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    // check for email
    const user = await User.findOne({email})

    if(user  && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            token: generateToken(user._id),
            email: user.email,

        })

    }
    else{
        res.status(400)
        throw new Error('Invalid user data')
    }
    
});

// Get current user
// private
const getMe = asyncHandler(async (req, res) => {
    res.json({ message: 'User data' });
});


// generate jwt 
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}
module.exports = {
    registerUser,
    loginUser,
    getMe,
};
