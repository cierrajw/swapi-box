import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import './card.css'

class Card extends Component{
  constructor(){
    super();
  }

  render(){
    const {name, age, species} = this.props;

    return(
      <div className="card">
        <h2>{name}</h2>
        <h4>{age}</h4>
        <h4>{species}</h4>
      </div>
    )
  }
}

export default Card;
