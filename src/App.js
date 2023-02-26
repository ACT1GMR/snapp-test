import React from 'react';
import Index from './features/list';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="py-10 text-center">
        <h3 className="font-medium leading-tight text-lg ">Behnam Salarinia UI Code Challenge</h3>
        <h4 className="leading-tight text-xs text-yellow-500 text-center">Loading video list and preview may take some time</h4>
      </div>

      <Index />
    </div>
  );
}

export default App;
