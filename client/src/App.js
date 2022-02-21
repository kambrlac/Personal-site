import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Topik from './components/Topik/Topik';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <React.Fragment> 
      <Navbar/>
      <Topik/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
