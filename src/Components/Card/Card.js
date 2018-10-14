import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import PropTypes from 'prop-types';
import './card.css';

class Card extends Component{
  constructor(){
    super();
  }

  render(){

    const { person_name, homeworld, species, language, population } = this.props;

    const { vehicle_name, model, vehicle_class, passengers } = this.props;

    const { planet_name, terrain, planet_population, climate } = this.props;

    const { residents } = this.props;

    if(this.props.type === 'people'){
      return(
        <div className="card">
          <section className="favorite-name"><h2>{person_name}</h2><div className="star-favorite">.</div></section>
          <h4>Homeworld: {homeworld}</h4>
          <h4>Species: {species}</h4>
          <h4>Language: {language}</h4>
          <h4>Population: {population}</h4>
        </div>
      )
    }else if(this.props.type === 'vehicles'){
      return (
          <div className="card">
            <section className="favorite-name"><h2 className="favorite-name">Vehicle name: {vehicle_name}</h2><div className="star-favorite">.</div></section>
            <h4>Model: {model}</h4>
            <h4>Class: {vehicle_class}</h4>
            <h4># of Passengers: {passengers}</h4>
          </div>
        );
      }else if(this.props.type === 'planets'){
        let residentResult = residents.map(resident=>{
            return resident;
        })
        return(
          <div className="card">
            <section className="favorite-name"><h2 className="favorite-name">Planet: {planet_name}</h2><div className="star-favorite">.</div></section>
            <h4>Terrain: {terrain}</h4>
            <h4>Population: {planet_population}</h4>
            <h4>Climate: {climate}</h4>
            <h4>Residents: {residentResult}</h4>
          </div>
        )
      }
  }
}

Card.propTypes = {
  name: PropTypes.string,
  homeworld: PropTypes.string,
  species: PropTypes.string,
  language: PropTypes.string,
  population: PropTypes.string
}

export default Card;
