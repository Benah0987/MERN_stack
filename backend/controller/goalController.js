const setGoals = (req, res) => {
    if (!req.body.text) {
        return res.status(400).json({ message: 'Please add a text' });
    }

    res.status(200).json({ message: 'Goal set successfully', text: req.body.text });
}

const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get goals' });
}

const updateGoal = (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` });
}

const deleteGoal = (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` });
}

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal,
}
