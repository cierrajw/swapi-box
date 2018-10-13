import React from 'react';
import PropTypes from 'prop-types';
import './buttons.css';

const Buttons = ({displayCards}) => {

  return (
    <section className="buttons-section">
    <button className="people-button card-section-button" onClick={()=>displayCards()}>People</button>
    <button className="planets-button card-section-button">Planets</button>
    <button className="vehicles-button card-section-button">Vehicles</button>
    </section>
  );
}

Buttons.propTypes = {
  displayCards: PropTypes.func.isRequired
}

export default Buttons;
