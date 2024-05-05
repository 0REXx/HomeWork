import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PieChart from './pieChart';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/transactions');
        setTransactions(response.data);
      } catch (error) {
        console.error('Failed to fetch transactions', error.response.data);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      <PieChart data={transactions} />
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.category}: ${transaction.amount} on {new Date(transaction.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
