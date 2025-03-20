import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Blue from './components/Blue';
import Red from './components/Red';
import Green from './components/Green';
import Yellow from './components/Yellow';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  
  return (
     <div id="container">
      <Navbar />

      <div id="main-section">
        <Routes>
          <Route path="/" element= { <Home/> } />
          <Route path="/blue" element={ <Blue />} /> 
          <Route path="/red" element={ <Red />} /> 
          <Route path="/green" element={ <Green />} /> 
          <Route path="/yellow" element={ <Yellow />} /> 
        </Routes>
      </div>

       <Footer />
      
    </div>
  );
}

export default App
