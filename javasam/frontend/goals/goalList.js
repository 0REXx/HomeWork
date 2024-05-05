import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GoalList = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/goals');
        setGoals(response.data);
      } catch (error) {
        console.error('Error fetching goals', error.response.data);
      }
    };

    fetchGoals();
  }, []);

  return (
    <div>
      <h2>Goals</h2>
      <ul>
        {goals.map(goal => (
          <li key={goal.id}>{goal.goalName} - Target: ${goal.targetAmount}, Current: ${goal.currentAmount}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoalList;
