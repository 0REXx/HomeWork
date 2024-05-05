import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AddTransaction from './components/transactions/AddTransaction';
import TransactionList from './components/transactions/TransactionList';
import AddGoal from './components/goals/AddGoal';
import GoalList from './components/goals/GoalList';
import Navbar from './components/common/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/transactions/add" component={AddTransaction} />
          <Route path="/transactions" component={TransactionList} exact />
          <Route path="/goals/add" component={AddGoal} />
          <Route path="/goals" component={GoalList} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
