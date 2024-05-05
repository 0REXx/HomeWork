import React, { useState } from 'react';
import axios from 'axios';

const AddTransaction = () => {
  const [formData, setFormData] = useState({
    userId: '', // Normally you would set this from the logged-in user session
    amount: '',
    type: '',
    category: '',
    date: ''
  });

  const { userId, amount, type, category, date } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/transactions', formData);
      console.log('Transaction added successfully', response.data);
    } catch (error) {
      console.error('Failed to add transaction', error.response.data);
    }
  };

  return (
    <div>
      <h2>Add Transaction</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="userId" value={userId} onChange={onChange} hidden />
        <label>
          Amount:
          <input type="number" name="amount" value={amount} onChange={onChange} required />
        </label>
        <label>
          Type:
          <select name="type" value={type} onChange={onChange} required>
            <option value="">Select Type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </label>
        <label>
          Category:
          <input type="text" name="category" value={category} onChange={onChange} required />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={date} onChange={onChange} required />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTransaction;
