import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import PropTypes from 'prop-types';
import './card.css'

class Card extends Component{
  constructor(){
    super();
  }

  render(){

    const { person_name, homeworld, species, language, population } = this.props;

    const { vehicle_name, model, vehicle_class, passengers } = this.props;

    if(this.props.type === 'people'){
      return(
        <div className="card">
          <h2>Name: {person_name}</h2>
          <h4>Homeworld: {homeworld}</h4>
          <h4>Species: {species}</h4>
          <h4>Language: {language}</h4>
          <h4>Population: {population}</h4>
        </div>
      )
    }else if(this.props.type === 'vehicles'){
      return (
          <div className="card">
            <h2>Vehicle name: {vehicle_name}</h2>
            <h4>Model: {model}</h4>
            <h4>Class: {vehicle_class}</h4>
            <h4># of Passengers: {passengers}</h4>
          </div>
        );
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
