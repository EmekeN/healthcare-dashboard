import React from 'react';
import './App.scss';
import Sidebar from './widgets/Sidebar.js';
import Dashboard from './Dashboard/Dashboard';

function App() {

  return (
    <div className="App">
      <Sidebar/>
      <Dashboard/>
    </div>
  );  
}

export default App;
