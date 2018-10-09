import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';

class Card extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div>This is a card</div>
    )
  }
}

export default Card;
