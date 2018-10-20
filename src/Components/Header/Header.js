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
          <button className="favorites-button" onClick={()=>this.handleFavoriteClick()}>Favorites: <span className="num-fave">{numFavorites.length}</span></button>
          <h1 className="swapi-title">swapi-box</h1>
        </section>
      </div>
    );
  }
}

Header.propTypes = {
  favoriteCards: PropTypes.array
}


export default Header;
