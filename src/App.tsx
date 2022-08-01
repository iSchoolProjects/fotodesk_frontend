import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<h1>Welcome</h1>} />
        <Route path="*" element={<h1>No content</h1>} />
      </Routes>
    </div>
  );
}

export default App;
