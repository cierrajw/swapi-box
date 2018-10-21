import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './header.css'


class Header extends Component{
  constructor(){
    super();
  }

  render(){

    return (
      <div className="header-div">
        <section className="header-section">
          <h1 className="swapi-title">swapi-box</h1>
        </section>
      </div>
    );
  }
}

export default Header;
