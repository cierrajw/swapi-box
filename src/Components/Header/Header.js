import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './header.css'


class Header extends Component{
  constructor(){
    super();
  }

  handleFavoriteClick = () =>{
    this.props.displayFavorites();
  }

  render(){

    const numFavorites = this.props.allCards.filter(card=>{
      return card.favorite;
    })

    return (
      <div className="header-div">
        <section className="header-section">
          <h1 className="swapi-title">SWAPI BOX</h1>
          <button className="favorites-button" onClick={()=>this.handleFavoriteClick()}>Favorites <span>{numFavorites.length}</span></button>
        </section>
      </div>
    );
  }
}

Header.propTypes = {
  favoriteCards: PropTypes.array
}


export default Header;
