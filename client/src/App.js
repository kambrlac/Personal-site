import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Topik from './components/Topik/Topik';
import {Comments} from './components/Comments/Comments';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './components/Comments/reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

function App() {
  return (
    <Provider store={store}>
      <Comments/>
      {/* <Navbar/>
      <Topik/> */}
    </Provider>
  );
}

export default App;
