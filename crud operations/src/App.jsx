// src/App.jsx
import React from 'react';
import Home from './comp/Home.jsx';
import About from './comp/About.jsx';
import Contact from './comp/Contact.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import './App.css';  // Your custom styles


import Error from './comp/Error.jsx'; // Ensure the correct import here
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <h1>Router App</h1>
        <Link to={'/'} >Home </Link>

        <Link to={'/about'} >About </Link>

        <Link to={'/contact'} >Contact </Link>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
