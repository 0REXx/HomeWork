import React, { useState } from 'react';
import axios from 'axios';

const AddGoal = () => {
  const [formData, setFormData] = useState({
    userId: '', // Идентификатор пользователя должен быть установлен сюда
    goalName: '',
    targetAmount: 0,
    currentAmount: 0,
    deadline: new Date(),
  });

  const { userId, goalName, targetAmount, currentAmount, deadline } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/goals', { userId, goalName, targetAmount, currentAmount, deadline });
      console.log('Goal added');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {/* Поля ввода для goalName, targetAmount, currentAmount, deadline */}
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default AddGoal;
