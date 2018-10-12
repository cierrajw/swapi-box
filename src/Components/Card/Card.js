import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import PropTypes from 'prop-types';
import './card.css'

class Card extends Component{
  constructor(){
    super();
  }

  render(){
    const {name, homeworld, species, language, population} = this.props;
    return(
      <div className="card">
        <h2>{name}</h2>
        <h4>Homeworld: {homeworld}</h4>
        <h4>Species: {species}</h4>
        <h4>Language: {language}</h4>
        <h4>Population: {population}</h4>
      </div>
    )
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
