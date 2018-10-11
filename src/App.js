import React, { Component } from 'react';
import './App.css';
import Game from './container/Game'

class App extends Component {
  render() {
    return (
      <div className="game-container">
        <Game/>
      </div>
    );
  }
}

export default App;
