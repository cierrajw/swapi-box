import React, { Component } from 'react';
import './buttons.css';
import PropTypes from 'prop-types';

class Buttons extends Component {
  constructor(){
    super();

    this.state={
      peopleButtonClicked: false,
      planetButtonClicked: false,
      vehiclesButtonClicked: false
    };
  }

  handlePeopleClicked = () =>{
    this.props.getPeopleCards();

    this.setState({
      peopleButtonClicked: true,
      planetButtonClicked: false,
      vehiclesButtonClicked: false
    });
  }

  handlePlanetClicked = () =>{

    this.props.getPlanetCards();

    this.setState({
      peopleButtonClicked: false,
      planetButtonClicked: true,
      vehiclesButtonClicked: false
    });

  }

  handleVehicleClicked = () => {
    this.props.getVehicleCards();

    this.setState({
      vehiclesButtonClicked: true,
      peopleButtonClicked: false,
      planetButtonClicked: false
    });
  }

  render(){

    const { peopleButtonClicked, planetButtonClicked, vehiclesButtonClicked } = this.state;
    const isPeopleClicked = peopleButtonClicked ? "button-selected": "card-section-button";
    const isPlanetClicked = planetButtonClicked ? "button-selected": "card-section-button";
    const isVehiclesClicked = vehiclesButtonClicked ? "button-selected": "card-section-button";

    return (
      <section className="buttons-section">
        <button className={isPeopleClicked} onClick={this.handlePeopleClicked}>People</button>
        <button className={isPlanetClicked} onClick={this.handlePlanetClicked}>Planets</button>
        <button className={isVehiclesClicked} onClick={this.handleVehicleClicked}>Vehicles</button>
      </section>
    );
  }
}

Buttons.propTypes = {
  getPeopleCards: PropTypes.func.isRequired,
  getPlanetCards: PropTypes.func.isRequired,
  getVehicleCards: PropTypes.func.isRequired
};

export default Buttons;
