import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import ScrollSection from '../ScrollSection/ScrollSection';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
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
        <main className="component-container">
        <ScrollSection className="scroll-section"/>
        <section className="right-section">
        <Header className="header" />
        <CardContainer className="card-container" />
        </section>
        </main>
      </div>
    );
  }
}

export default App;
