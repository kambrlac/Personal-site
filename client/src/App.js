import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Topik from './components/Topik/Topik';
import Futer from './components/Futer/Futer';


function App() {
  return (
    <React.Fragment> 
      <Navbar/>
      <Topik/>
    </React.Fragment>
  );
}

export default App;
