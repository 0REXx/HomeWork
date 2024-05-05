const express = require('express');
const router = express.Router();
const { addGoal, getGoals } = require('../controllers/goalsController');

router.post('/', addGoal);
router.get('/', getGoals);

module.exports = router;
