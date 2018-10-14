import React, { Component } from 'react';
import './buttons.css'

class Buttons extends Component {
  constructor(){
    super();

    this.state={
      peopleButtonClicked: false,
      planetButtonClicked: false,
      vehiclesButtonClicked: false
    }
  }

  handleButtonClicked = (event) => {

    this.props.getVehicleCards();

    const { name } = event.target;

    if(name === "people-button"){
      this.setState({
        peopleButtonClicked: true,
        planetButtonClicked: false,
        vehiclesButtonClicked: false
      })
    }else if(name === "planets-button"){
      this.setState({
        planetButtonClicked: true,
        peopleButtonClicked: false,
        vehiclesButtonClicked: false
      })

    }else if(name === "vehicles-button"){
      this.setState({
        vehiclesButtonClicked: true,
        peopleButtonClicked: false,
        planetButtonClicked: false
      })
    }
  }

  render(){

    const { peopleButtonClicked, planetButtonClicked, vehiclesButtonClicked } = this.state;

    const isPeopleClicked = peopleButtonClicked ? "button-selected": "card-section-button";
    const isPlanetClicked = planetButtonClicked ? "button-selected": "card-section-button";
    const isVehiclesClicked = vehiclesButtonClicked ? "button-selected": "card-section-button";

    return(
      <section className="buttons-section">
      <button className={isPeopleClicked} onClick={this.handleButtonClicked} name="people-button">People</button>
      <button className={isPlanetClicked} onClick={this.handleButtonClicked} name="planets-button">Planets</button>
      <button className={isVehiclesClicked} onClick={this.handleButtonClicked} name="vehicles-button">Vehicles</button>
      </section>
    );
  }
}

export default Buttons;
