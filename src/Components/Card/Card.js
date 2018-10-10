import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import './card.css'

class Card extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div className="card">This is a card</div>
    )
  }
}

export default Card;
