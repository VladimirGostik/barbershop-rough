// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <About />
    </div>
  );
}

export default App;
