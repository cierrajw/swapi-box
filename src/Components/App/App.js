import React, { Component } from 'react';
import ScrollSection from '../ScrollSection/ScrollSection';
import Header from '../Header/Header';
import Buttons from '../Buttons/Buttons';
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
          <Header className="header"/>
          <CardContainer className="card-container"/>
          <Buttons className="buttons-section"/>
        </section>
        </main>
      </div>
    );
  }
}

export default App;
