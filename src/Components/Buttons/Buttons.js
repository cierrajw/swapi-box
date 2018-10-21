import React, { Component } from 'react';
import './buttons.css';
import PropTypes from 'prop-types';
import person from "../../assets/Images/person.png";
import planet from "../../assets/Images/planet.png";
import vehicle from "../../assets/Images/vehicle.png";
import { BrowserRouter} from 'react-router-dom';
import { Route, NavLink } from 'react-router-dom';


class Buttons extends Component {
  constructor(){
    super();

    this.state={
      currentButtonClicked: '',
      numFavorites: ''
    };
  }

  handlePeopleClicked = () =>{
    this.props.getPeopleCards();
    this.setState({
      currentButtonClicked: 'people'
    });
  }

  handlePlanetClicked = () =>{

    this.props.getPlanetCards();
    this.setState({
      currentButtonClicked: 'planets'
    });
  }

  handleVehicleClicked = () => {
    this.props.getVehicleCards();
    this.setState({
      currentButtonClicked: 'vehicles'
    });
  }

  handleFavoriteClick = () =>{
    this.props.displayFavorites();
    this.setState({
      currentButtonClicked: 'favorites'
    });
  }

  render(){

    const numFavorites = this.props.allCards.filter(card=>{
      return card.favorite;
    });

    const isPeopleClicked = this.state.currentButtonClicked === 'people' ? "button-selected": "card-section-button";
    const isPlanetClicked = this.state.currentButtonClicked === 'planets' ? "button-selected": "card-section-button";
    const isVehiclesClicked = this.state.currentButtonClicked === 'vehicles' ? "button-selected": "card-section-button";
    const isFavoritesClicked = this.state.currentButtonClicked === 'favorites' ? "button-selected": "favorites-button";

    return (
      <section className="buttons-section">
        <button className={isPeopleClicked} onClick={this.handlePeopleClicked}><img src={person} height="25" width="25" className="icon" alt="" />People</button>
        <button className={isPlanetClicked} onClick={this.handlePlanetClicked}><img src={planet} height="25" width="25" className="icon" alt="" />Planets</button>
        <button className={isVehiclesClicked} onClick={this.handleVehicleClicked}><img src={vehicle} height="25" width="25" className="icon" alt="" />Vehicles</button>
        <button className={isFavoritesClicked} onClick={this.handleFavoriteClick}>Favorites: <span className="num-fave">{numFavorites.length}</span></button>
      </section>
    );
  }
}

Buttons.propTypes = {
  getPeopleCards: PropTypes.func,
  getPlanetCards: PropTypes.func,
  getVehicleCards: PropTypes.func,
  displayFavorites: PropTypes.func,
  allCards: PropTypes.array
};

export default Buttons;
