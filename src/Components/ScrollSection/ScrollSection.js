import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import './scroll-section.css'

class ScrollSection extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div className="scroll-div">
        <section>
          <div className="scroll-text">{this.props.filmText}</div>
        </section>
      </div>
    )
  }
}

export default ScrollSection;
