import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/SignUp';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define the route for the Home page */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />  {/* Login page */}
      </Routes>
    </Router>
  );
};



export default App;
