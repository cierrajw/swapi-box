import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
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
        <h4>{homeworld}</h4>
        <h4>{species}</h4>
        <h4>{language}</h4>
        <h4>{population}</h4>
      </div>
    )
  }
}

export default Card;
