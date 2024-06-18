const express = require('express');
const router = express.Router();
const { getGoals, setGoals, updateGoal, deleteGoal } = require('../controller/goalController');
const { protect } = require('../middleware/authMiddleware');

// Define the routes
// adding proect to ensure user is authenticated
router.route('/')
    .get(protect, getGoals)
    .post(protect, setGoals);

router.route('/:id')
    .put(protect, updateGoal)
    .delete(protect, deleteGoal);

module.exports = router;
