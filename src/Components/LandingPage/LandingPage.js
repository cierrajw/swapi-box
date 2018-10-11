import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../Header/Header';
import ScrollSection from '../ScrollSection/ScrollSection'
import Buttons from '../Buttons/Buttons';
import CardContainer from '../CardContainer/CardContainer';
import './landing-page.css'

class LandingPage extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div className="LandingPage">
        <main className="component-container">
        <ScrollSection className="scroll-section"/>
        <section className="right-section">
          <Header className="header"/>
          <CardContainer className="card-container"/>
          <Buttons className="buttons-section"/>
        </section>
        </main>
      </div>
    )
  }
}

export default LandingPage;
