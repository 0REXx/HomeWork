import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/transactions">Transactions</Link></li>
        <li><Link to="/goals">Goals</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
