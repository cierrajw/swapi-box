import React, { Component } from 'react';
import Header from '../Header/Header';
import ScrollSection from '../ScrollSection/ScrollSection';
import Buttons from '../Buttons/Buttons';
import CardContainer from '../CardContainer/CardContainer';
import './landing-page.css';
import PropTypes from 'prop-types';

class LandingPage extends Component{
  constructor(){
    super();
  }

  render(){

    const { filmText, getPeopleCards, getVehicleCards, getPlanetCards, addFavorites, allCards} = this.props;
    // <ScrollSection className="scroll-section" filmText={filmText.scroll}/>

    return (
      <div className="LandingPage">
        <main className="component-container">

          <section className="right-section">
            <Header className="header" displayFavorites={this.props.displayFavorites} allCards={allCards}/>
            <CardContainer
              className="card-container"
              allCards={this.props.allCards}
              addFavorites={this.props.addFavorites} />
            <Buttons
              className="buttons-section"
              getPeopleCards={getPeopleCards}
              getVehicleCards={getVehicleCards}
              getPlanetCards={getPlanetCards}
            />
          </section>

        </main>
      </div>
    );
  }
}

LandingPage.propTypes = {
  filmText: PropTypes.object,
  getPeopleCards: PropTypes.func,
  getVehicleCards: PropTypes.func,
  getPlanetCards: PropTypes.func,
  addFavorites: PropTypes.func,
  favoriteCards: PropTypes.array,
  displayFavorites: PropTypes.func,
  allCards: PropTypes.array
};

export default LandingPage;
