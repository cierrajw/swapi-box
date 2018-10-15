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

    const { filmText, displayPeopleCards, displayVehicleCards, getPeopleCards, getVehicleCards, getPlanetCards} = this.props;

    return(
      <div className="LandingPage">
        <main className="component-container">

        <ScrollSection className="scroll-section" filmText={filmText}/>

        <section className="right-section">

          <Header className="header" displayFavorites={this.props.displayFavorites}/>

          <CardContainer className="card-container"
          allCards={this.props.allCards}
          addFavorites={(id)=>this.props.addFavorites(id)}
          favoriteCards={this.props.favoriteCards}/>


          <Buttons className="buttons-section"
          getPeopleCards={getPeopleCards}
          getVehicleCards={getVehicleCards}
          getPlanetCards={getPlanetCards}/>
        </section>

        </main>
      </div>
    )
  }
}

export default LandingPage;
