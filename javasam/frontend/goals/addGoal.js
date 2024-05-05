import React, { useState } from 'react';
import axios from 'axios';

const AddGoal = () => {
  const [formData, setFormData] = useState({
    goalName: '',
    targetAmount: '',
    currentAmount: '',
    deadline: ''
  });

  const { goalName, targetAmount, currentAmount, deadline } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/goals', formData);
      console.log('Goal added successfully', response.data);
    } catch (error) {
      console.error('Failed to add goal', error.response.data);
    }
  };

  return (
    <div>
      <h2>Add Goal</h2>
      <form onSubmit={onSubmit}>
        <label>
          Goal Name:
          <input type="text" name="goalName" value={goalName} onChange={onChange} required />
        </label>
        <label>
          Target Amount:
          <input type="number" name="targetAmount" value={targetAmount} onChange={onChange} required />
        </label>
        <label>
          Current Amount:
          <input type="number" name="currentAmount" value={currentAmount} onChange={onChange} required />
        </label>
        <label>
          Deadline:
          <input type="date" name="deadline" value={deadline} onChange={onChange} required />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddGoal;
