import React, { Component } from 'react';
import Header from '../Header/Header';
import Buttons from '../Buttons/Buttons';
import CardContainer from '../CardContainer/CardContainer';
import './landing-page.css';
import PropTypes from 'prop-types';

class LandingPage extends Component{
  constructor(){
    super();
  }

  render(){

    const { getPeopleCards, getVehicleCards, getPlanetCards, toggleFavorite, allCards, displayFavorites } = this.props;

    return (
      <div className="LandingPage">
        <main className="component-container">
          <section className="right-section">
            <Header className="header" displayFavorites={this.props.displayFavorites} allCards={allCards}/>
            <CardContainer
              className="card-container"
              allCards={allCards}
              toggleFavorite={toggleFavorite} 
            />
            <Buttons
              className="buttons-section"
              getPeopleCards={getPeopleCards}
              getVehicleCards={getVehicleCards}
              getPlanetCards={getPlanetCards}
              allCards={allCards}
              displayFavorites={displayFavorites}
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
  toggleFavorite: PropTypes.func,
  favoriteCards: PropTypes.array,
  displayFavorites: PropTypes.func,
  allCards: PropTypes.array
};

export default LandingPage;
