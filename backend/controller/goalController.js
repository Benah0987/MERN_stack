//route GET /api/goals

const setGoals = (req, res) => {
    if (req.body.text){
        res.status(400).json({message: 'please add a text'})
    };
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
