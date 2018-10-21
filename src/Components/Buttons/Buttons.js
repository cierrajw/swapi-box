import React, { Component } from 'react';
import './buttons.css';
import PropTypes from 'prop-types';
import person from "../../assets/Images/person.png";
import planet from "../../assets/Images/planet.png";
import vehicle from "../../assets/Images/vehicle.png";
import {NavLink} from 'react-router-dom';



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
        <NavLink to='/people' className='nav'>
          <button className={isPeopleClicked} onClick={this.handlePeopleClicked}><img src={person} height="25" width="25" className="icon" />People</button>
        </NavLink>
        <NavLink to='/planets' className='nav'>
          <button className={isPlanetClicked} onClick={this.handlePlanetClicked}><img src={planet} height="25" width="25" className="icon" />Planets</button>
        </NavLink>
        <NavLink to='/vehicles' className='nav'>
          <button className={isVehiclesClicked} onClick={this.handleVehicleClicked}><img src={vehicle} height="25" width="25" className="icon" />Vehicles</button>
        </NavLink>  
        <NavLink to='/favorites' className='nav'>
          <button className={isFavoritesClicked} onClick={this.handleFavoriteClick}>Favorites: <span className="num-fave">{numFavorites.length}</span></button>
        </NavLink>
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
