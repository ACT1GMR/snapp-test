import React from 'react';
import Event from './features/event';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="mt-9 hidden md:block text-center"/>
      <Event/>
      <div className="mb-9 hidden md:block text-center"/>
    </div>
  );
}

export default App;
