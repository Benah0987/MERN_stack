const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe } = require('../controller/userController');

router.post('/', registerUser); // Change this line to /register
router.post('/login', loginUser);
router.get('/me', getMe);

module.exports = router;
