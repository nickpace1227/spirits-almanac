import './App.css';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import LoginPage from './LoginPage';

function SpiritsAlmanac() {
  return (
    <div class='background'>
      <Router>
        <LoginPage />
      </Router>
    </div>
  );
}

export default SpiritsAlmanac;
