import React, { Component } from 'react';
import SplashPage from '../SplashPage/SplashPage'
import './App.css';
import { fetchPeople } from './helper.js'

class App extends Component {
  constructor(){
    super();

    this.state = {
      displayedCards: [],
      peopleCards: [],
      favoriteCards: []
    }
  }

  componentDidMount() {
    
  }

  displayPeopleCards = async() => {
    const peopleData = await fetchPeople();
    this.setState({peopleCards: peopleData});
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
