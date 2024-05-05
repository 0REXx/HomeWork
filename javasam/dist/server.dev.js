"use strict";

var express = require('express');

var mongoose = require('mongoose');

var bodyParser = require('body-parser');

var cors = require('cors');

var userRoutes = require('./routes/users');

var transactionRoutes = require('./routes/transactions');

var goalRoutes = require('./routes/goals');

var app = express();
var port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cors());
mongoose.connect('mongodb://localhost/budget-planner', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log('MongoDB connected');
})["catch"](function (err) {
  return console.log(err);
});
app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/goals', goalRoutes);
app.listen(port, function () {
  return console.log("Server running on port ".concat(port));
});