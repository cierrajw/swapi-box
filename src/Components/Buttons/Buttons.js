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

  handlePeopleClicked = () =>{
    this.props.getPeopleCards();

    this.setState({
      peopleButtonClicked: true,
      planetButtonClicked: false,
      vehiclesButtonClicked: false
    })

  }

  handleVehicleClicked = () => {

    this.props.getVehicleCards();

      this.setState({
        vehiclesButtonClicked: true,
        peopleButtonClicked: false,
        planetButtonClicked: false
      })
  }

  render(){

    const { peopleButtonClicked, planetButtonClicked, vehiclesButtonClicked } = this.state;

    const isPeopleClicked = peopleButtonClicked ? "button-selected": "card-section-button";
    const isPlanetClicked = planetButtonClicked ? "button-selected": "card-section-button";
    const isVehiclesClicked = vehiclesButtonClicked ? "button-selected": "card-section-button";

    return(
      <section className="buttons-section">
      <button className={isPeopleClicked} onClick={this.handlePeopleClicked} name="people-button">People</button>
      <button className={isPlanetClicked} onClick={this.handleButtonClicked} name="planets-button">Planets</button>
      <button className={isVehiclesClicked} onClick={this.handleVehicleClicked} name="vehicles-button">Vehicles</button>
      </section>
    );
  }
}

export default Buttons;
