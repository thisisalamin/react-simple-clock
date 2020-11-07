import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  }

  setInterval(updateTime, 1000)

  return (
    <div className="App">
        <div className='container'>
          <h1 className="time">{ time }</h1>
        </div>
    </div>
  )
}

export default App;
