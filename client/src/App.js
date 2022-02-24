import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Topik from './components/Topik/Topik';
import Futer from './components/Futer/Futer';


function App() {
  return (
    <React.Fragment> 
    <div className='app'>
      <Navbar/>
      <Topik/>
      </div>
      <Futer/>
    </React.Fragment>
  );
}

export default App;
