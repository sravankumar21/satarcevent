import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import RulesPage from './Rulespage'; // Ensure the path is correct
import LoginPage from './loginpage'; // Ensure the path is correct
import Level1Page from './Level1Page';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/level1" element={<Level1Page />} />
      </Routes>
    </Router>
  );
};

export default App;
