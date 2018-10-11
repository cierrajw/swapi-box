import React from 'react';
import './buttons.css'

const Buttons = ({displayCards}) => {

  return (
    <section className="buttons-section">
    <button className="people-button card-section-button" onClick={displayCards()}>People</button>
    <button className="planets-button card-section-button">Planets</button>
    <button className="vehicles-button card-section-button">Vehicles</button>
    </section>
  );
}

export default Buttons;
