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
        <h1 className="swapi-title">Swapi Boy</h1>
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
