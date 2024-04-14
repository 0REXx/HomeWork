import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GoalsList = ({ userId }) => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/goals?userId=${userId}`);
        setGoals(response.data);
      } catch (error) {
        console.error('Error fetching goals:', error.response.data);
      }
    };

    fetchGoals();
  }, [userId]);

  return (
    <div>
      <h2>Goals</h2>
      <ul>
        {goals.map(goal => (
          <li key={goal._id}>
            {goal.goalName}: ${goal.currentAmount} / ${goal.targetAmount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalsList;
