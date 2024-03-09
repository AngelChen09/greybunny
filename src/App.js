import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/NavBar';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />  
      </Router>
      <HomePage />
    </div>
  );
}

export default App;