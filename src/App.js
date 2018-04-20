import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Be psyched!</h1>
        <p>Our website is under development!</p>
        <p>Meanwhile, if you have something to say you can reach us through the following channels.</p>
      </div>
    );
  }
}

export default App;
