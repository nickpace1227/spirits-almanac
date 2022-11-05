import './App.css';
import React from 'react';
import LoginPage from './LoginPage';
import Header from './Header';
import Inventory from './Inventory';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function SpiritsAlmanac() {

  return (
    <body>
      <Router>
        <Header />
        <main>
        <Route exact path='/LoginPage'>
            <LoginPage />
        </Route>
        </main>
      </Router>
    </body>

  )
}

export default SpiritsAlmanac;
