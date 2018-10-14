import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import './card.css'

class Card extends Component{
  constructor(){
    super();

  }

  render(){

    const { mame, homeworld, species, language, population } = this.props;

    const { name, model, vehicle_class, passengers } = this.props;


    console.log(this.props.peopleClicked)

    if(this.props.peopleClicked === true){
      return(
        <div className="card">

          <h2>{name}</h2>
          <h4>Homeworld: {homeworld}</h4>
          <h4>Species: {species}</h4>
          <h4>Language: {language}</h4>
          <h4>Population: {population}</h4>
        </div>
      )
    }else if(this.props.vehiclesClicked === true){
      return(
        <div className="card">
          <h2>Vehicle name: {name}</h2>
          <h4>Model: {model}</h4>
          <h4>Class: {vehicle_class}</h4>
          <h4># of Passengers: {passengers}</h4>
        </div>
      )
    }
  }
}

export default Card;
