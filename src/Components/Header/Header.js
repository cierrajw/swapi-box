import React, {Component} from 'react';
import './header.css'


class Header extends Component{
  constructor(){
    super();
  }

  handleFavoriteClick = () =>{
    this.props.displayFavorites();
  }

  render(){
    return (
      <div className="header-div">
        <section className="header-section">
          <h1 className="swapi-title">SWAPI BOX</h1>
          <button className="favorites-button" onClick={()=>this.handleFavoriteClick()}>Favorites <span>{this.props.favoriteCards.length}</span></button>
        </section>
      </div>
    );
  }
}


export default Header;
