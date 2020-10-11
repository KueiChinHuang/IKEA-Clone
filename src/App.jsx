import React from 'react';
import './App.css';
import Bedroom from './components/Bedroom';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <div className="app-header">
          <Header />
        </div>
        <div className="app-page">
          <Bedroom />
        </div>
      </div>
    </div>
  );
}

export default App;
