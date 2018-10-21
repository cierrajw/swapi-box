import React, { Component } from 'react';
import './buttons.css';
import PropTypes from 'prop-types';
import person from "../../assets/Images/person.png";
import planet from "../../assets/Images/planet.png";
import vehicle from "../../assets/Images/vehicle.png";



class Buttons extends Component {
  constructor(){
    super();

    this.state={
      peopleButtonClicked: false,
      planetButtonClicked: false,
      vehiclesButtonClicked: false
    };
  }

  handlePeopleClicked = () =>{
    this.props.getPeopleCards();

    this.setState({
      peopleButtonClicked: true,
      planetButtonClicked: false,
      vehiclesButtonClicked: false
    });
  }

  handlePlanetClicked = () =>{

    this.props.getPlanetCards();

    this.setState({
      peopleButtonClicked: false,
      planetButtonClicked: true,
      vehiclesButtonClicked: false
    });

  }

  handleVehicleClicked = () => {
    this.props.getVehicleCards();

    this.setState({
      vehiclesButtonClicked: true,
      peopleButtonClicked: false,
      planetButtonClicked: false
    });
  }

  handleFavoriteClick = () =>{
    this.props.displayFavorites();
  }

  render(){

    const numFavorites = this.props.allCards.filter(card=>{
      return card.favorite;
    })

    const { peopleButtonClicked, planetButtonClicked, vehiclesButtonClicked } = this.state;
    const isPeopleClicked = peopleButtonClicked ? "button-selected": "card-section-button";
    const isPlanetClicked = planetButtonClicked ? "button-selected": "card-section-button";
    const isVehiclesClicked = vehiclesButtonClicked ? "button-selected": "card-section-button";

    return (
      <section className="buttons-section">
        <button className={isPeopleClicked} onClick={this.handlePeopleClicked}><img src={person} height="25" width="25" className="icon" />People</button>
        <button className={isPlanetClicked} onClick={this.handlePlanetClicked}><img src={planet} height="25" width="25" className="icon" />Planets</button>
        <button className={isVehiclesClicked} onClick={this.handleVehicleClicked}><img src={vehicle} height="25" width="25" className="icon" />Vehicles</button>
        <button className="favorites-button" onClick={()=>this.handleFavoriteClick()}>Favorites: <span className="num-fave">{numFavorites.length}</span></button>
      </section>
    );
  }
}

Buttons.propTypes = {
  getPeopleCards: PropTypes.func,
  getPlanetCards: PropTypes.func,
  getVehicleCards: PropTypes.func,
  favoriteCards: PropTypes.array
};

export default Buttons;
