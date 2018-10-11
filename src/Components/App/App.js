import React, { Component } from 'react';
import SplashPage from '../SplashPage/SplashPage'
import './App.css';
import { fetchPeople } from './helper.js'

class App extends Component {
  constructor(){
    super();

    this.state = {
      allCards: [],
      favoriteCards: []
    }
  }

  componentDidMount() {
    fetchPeople()
  }

  render() {
    return (
      <div className="App">
        <SplashPage />
      </div>
    );
  }
}

export default App;
