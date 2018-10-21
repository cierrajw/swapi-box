import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

const Card = ({ 
  name, 
  homeworld, 
  species, 
  language, 
  population, 
  model, 
  vehicleClass, 
  passengers, 
  terrain, 
  planetPopulation, 
  climate, 
  residents, 
  id, 
  favorite, 
  type, 
  toggleFavorite }) => {

  switch (type){

    case 'people':
      return (
        <div 
          className={favorite ? "card-favorite": "card"}
          onClick={()=>toggleFavorite(id, type)}
        >
          <section
            className="favorite-name"><h2>{name}</h2>
            <div
              className={favorite ? "star-favorite": "star"}
            >
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
        <div 
          className={favorite ? "card-favorite": "card"}
          onClick={()=>toggleFavorite(id, type)}
        >
          <section
            className="favorite-name"><h2>{name}</h2>
            <div
              className={favorite ? "star-favorite": "star"}
            >.
            </div>
          </section>
          <h4>Model: {model}</h4>
          <h4>Class: {vehicleClass}</h4>
          <h4># of Passengers: {passengers}</h4>
        </div>
      );

    case 'planets':

      let residentResult = residents.map(resident => {
        if (residents.length > 1) {
          return <h4 className="resident-list"> {resident}, </h4>;
        } else {
          return <h4> {resident} </h4>;
        } 
      });
      
      return (
        <div 
          className={favorite ? "card-favorite": "card"}
          onClick={()=>toggleFavorite(id, type)}
        >
          <section
            className="favorite-name"><h2>{name}</h2>
            <div
              className={favorite ? "star-favorite": "star"}
            >.
            </div>
          </section>
          <h4>Terrain: {terrain}</h4>
          <h4>Population: {planetPopulation}</h4>
          <h4>Climate: {climate}</h4>
          <h4 className="residents">Residents:
            {residentResult}
          </h4>
        </div>
      );

    default:
      break;
  } 
};


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
  toggleFavorite: PropTypes.func,
  favorite: PropTypes.bool
};

export default Card;
