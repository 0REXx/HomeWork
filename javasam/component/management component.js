import React, { useState } from 'react';
import axios from 'axios';

const AddTransaction = () => {
  const [formData, setFormData] = useState({
    userId: '', 
    amount: 0,
    type: '', 
    category: '',
    date: new Date(),
  });

  const { userId, amount, type, category, date } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/transactions', { userId, amount, type, category, date });
      console.log('Transaction added');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {/* Поля ввода для amount, type, category, date */}
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransaction;
