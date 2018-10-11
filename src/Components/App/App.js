import React, { Component } from 'react';
import ScrollSection from '../ScrollSection/ScrollSection';
import Header from '../Header/Header';
import Buttons from '../Buttons/Buttons';
import CardContainer from '../CardContainer/CardContainer';
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
        <main className="component-container">
        <ScrollSection className="scroll-section"/>
        <section className="right-section">
          <Header className="header"/>
          <CardContainer className="card-container"
            displayedCards={this.state.peopleCards}
          />
          <Buttons className="buttons-section"
            displayCards = {this.displayPeopleCards}
          />
        </section>
        </main>
      </div>
    );
  }
}

export default App;
