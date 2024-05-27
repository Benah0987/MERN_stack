const express = require('express');
const router = express.Router();
const { getGoals, updateGoal, deleteGoal, setGoals } = require('../controller/goalController');

// Define the routes
router.route('/').get(getGoals).post(setGoals);

// Use `.put` and `.delete` for update and delete
router.route('/:id').delete(deleteGoal).put(updateGoal);

module.exports = router;
