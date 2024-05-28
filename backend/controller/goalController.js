const asyncHandler = require('express-async-handler');

const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400).json({ message: 'Please add a text' });
        return;
    }

    // Simulate an asynchronous operation, such as saving to a database
    // const newGoal = await Goal.create({ text: req.body.text });

    res.status(200).json({ message: 'Goal set successfully', text: req.body.text });
});

const getGoals = asyncHandler(async (req, res) => {
    // Simulate an asynchronous operation, such as fetching from a database
    // const goals = await Goal.find();

    res.status(200).json({ message: 'Get goals' });
});

const updateGoal = asyncHandler(async (req, res) => {
    // Simulate an asynchronous operation, such as updating a database entry
    // const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json({ message: `Update goal ${req.params.id}` });
});

const deleteGoal = asyncHandler(async (req, res) => {
    // Simulate an asynchronous operation, such as deleting from a database
    // await Goal.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal,
};
