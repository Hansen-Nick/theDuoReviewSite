import React from 'react';
import logo from './logo.svg';
import './App.css';
import godofwar from './godofwar.jpg'

function App() {
  return (
    <div className="App">
      <div className='homepage'>
        <div className='single-player-img'>
          <img src={godofwar}/>
        </div>
        <div className='page-info'>
          <p className="page-text">
            WELCOME TO THE DUO REVIEW
            <div className='horizontal-line' />
          </p>
        </div>
        <div className='comp-img' />
      </div>
    </div>
  );
}

export default App;
