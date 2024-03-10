import React from 'react';
import './App.css';
import Home from './components/Pages/index';
import AboutMe from './components/Pages/about';
import MiniGames from './components/Pages/games';
import Projects from './components/Pages/proj';

import Navbar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (

    <Router>
      <Navbar /> 
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/games' element={<MiniGames />} />
        <Route path='/projects' element={<Projects />} />
      </Routes> 
    </Router>
    
  );
};

export default App;