const asyncHandler = require('express-async-handler');
const Goal = require('../model/goalModel');
const User = require('../model/userModel');

// Create a new goal
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400).json({ message: 'Please add a text' });
        return;
    }

    const newGoal = await Goal.create({
        text: req.body.text,
        user: req.user.id,
    });

    res.status(200).json(newGoal);
});

// Get all goals for the authenticated user
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id });
    res.status(200).json(goals);
});

// Update a goal
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error('Goal not found');
    }

    

    // Check if user exists
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    // Ensure the logged-in user matches the goal user
    if (goal.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedGoal);
});

// Delete a goal
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error('Goal not found');
    }

   

    // Check if user exists
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    // Ensure the logged-in user matches the goal user
    if (goal.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    await Goal.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: `Deleted goal ${req.params.id}` });
});

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal,
};
