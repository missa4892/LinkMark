import React from 'react';
import logo from './logo.svg';
import './App.css';
import LinkBody from './LinkBody';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to LinkMark!</h1>
        <LinkBody/>
      </header>
    </div>
  );
}



export default App;
