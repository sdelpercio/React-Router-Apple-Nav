import React from 'react';
import {Route} from 'react-router-dom';
import NavContainer from './components/NavContainer';
import SubNav from './components/SubNav';
import './App.css';

const categories = [
  {
    id: 0,
    title: "Mac",
    subtitle: ['MacBook', 'MacBook Air', 'iMac']
  },
  {
    id: 1,
    title: "iPad",
    subtitle: ['iPad 1', 'iPad Pro']
  },
  {
    id: 2,
    title: "iPhone",
    subtitle: ['iPhone XR', 'iPhone 8', 'iPhone 10', 'iPhone 11']
  },
  {
    id: 3,
    title: "Watch",
    subtitle: ['Apple Watch', 'Apple Watch Pro']
  }
]

function App() {
  return (
    <div className="App">
      <NavContainer topNav={categories}/>
      <Route path='/' />
      <Route path='/products/:productID'>
        <SubNav topNav={categories}/>
      </Route>
    </div>
  );
}

export default App;
