import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionsList = ({ userId }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/transactions?userId=${userId}`);
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error.response.data);
      }
    };

    fetchTransactions();
  }, [userId]);

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction._id}>
            {transaction.date.split('T')[0]} - {transaction.type} - {transaction.category} - ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;
