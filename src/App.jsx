import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import React from 'react';
import './App.css';


function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App
