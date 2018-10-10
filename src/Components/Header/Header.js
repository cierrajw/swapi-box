import React from 'react';
import './header.css'

const Header = () => {

  return (
    <div className="header-div">
    <section className="header-section">
    <h1 className="swapi-title">Swapi Box</h1>
    <button className="favorites-button">Favorites</button>
    </section>
    </div>
  );
}

export default Header;
