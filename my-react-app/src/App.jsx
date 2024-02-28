import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './NavBar';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    </>
  );
}

export default App;
