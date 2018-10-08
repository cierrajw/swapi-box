import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      allCards: [],
      favoriteCards: []
    }
  }
  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
