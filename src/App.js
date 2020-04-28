import React, { Component } from 'react';
import Board from './Components/Board'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>
        <span style={{color: "rgba(255, 170, 43, 0.925)"}}>C</span>
        <span style={{color: "#c45e38"}}>H</span>
        <span style={{color: "#78caab"}}>E</span>
        <span style={{color: "rgb(255, 193, 193)"}}>K</span>
      </h1>
        <Board />
      </div>
    );
  }
}

export default App;
