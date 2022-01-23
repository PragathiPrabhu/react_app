import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [count,setCount]=useState(0);


  return (
    <div className="App">    
        <div  className="mainContainer">
          <h1>Counter</h1>
          <div className='counter'>{count}</div>
          <div className='btnContainer'>
          <button className='counterButton' onClick={()=>{setCount(count-1)}}>-</button>
          <button className='counterButton'  onClick={()=>{setCount(count+1)}}>+</button>
          </div>
        </div>
    </div>
  );
}

export default App;
