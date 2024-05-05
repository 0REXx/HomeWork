const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/users');
const transactionRoutes = require('./routes/transactions');
const goalRoutes = require('./routes/goals');

const app = express();
const port = process.env.PORT || 3003;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/budger-planner')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/goals', goalRoutes);
app.listen(port, () => console.log(`Server running on port ${port}`));
