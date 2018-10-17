import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './card.css';

class Card extends Component{
  constructor(){
    super();
  }

  handleFavoriteClick = (id) =>{
    this.props.addFavorites(id);
  }

  render(){
    const { name, homeworld, species, language, population, model, vehicleClass, passengers, terrain, planetPopulation, climate, residents, id} = this.props;

    switch (this.props.type){
      
      case 'people':
        return (
          <div className="card">
            <section 
              className="favorite-name"><h2>{name}</h2>
              <div
                className="star-favorite"
                onClick={()=>this.handleFavoriteClick(id)}
              >.
              </div>
            </section>

            <h4>Homeworld: {homeworld}</h4>
            <h4>Species: {species}</h4>
            <h4>Language: {language}</h4>
            <h4>Population: {population}</h4>
          </div>
        );
    
      case 'vehicles':
        return (
          <div className="card">
            <section className="favorite-name">
              <h2 className="favorite-name">{name}</h2>
              <div
                className="star-favorite"
                onClick={()=>this.handleFavoriteClick(id)}
              >.
              </div>
            </section>
            <h4>Model: {model}</h4>
            <h4>Class: {vehicleClass}</h4>
            <h4># of Passengers: {passengers}</h4>
          </div>
        );

      case 'planets':
        let residentResult = residents.map(resident=>{
          return resident;
        });

        return (
          <div className="card">
            <section className="favorite-name">
              <h2 className="favorite-name">{name}</h2>
              <div
                className="star-favorite"
                onClick={()=>this.handleFavoriteClick(id)}
              >.
              </div>
            </section>
            <h4>Terrain: {terrain}</h4>
            <h4>Population: {planetPopulation}</h4>
            <h4>Climate: {climate}</h4>
            <h4>Residents: {residentResult}</h4>
          </div>
        );

      default: 
        break;
    }
  }
}

Card.propTypes = {
  name: PropTypes.string,
  homeworld: PropTypes.string,
  species: PropTypes.string,
  language: PropTypes.string,
  population: PropTypes.string,
  model: PropTypes.string,
  vehicleClass: PropTypes.string,
  passengers: PropTypes.string,
  terrain: PropTypes.string,
  planetPopulation: PropTypes.string,
  climate: PropTypes.string,
  residents: PropTypes.array,
  id: PropTypes.number,
  type: PropTypes.string,
  addFavorites: PropTypes.func.isRequired
};

export default Card;
