import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import MathOperations from './components/math';

function App() {
  return (
    <div className="App">
      <div className="inner-container">
        <MathOperations />
      </div>
    </div>
  );
}

export default App;
