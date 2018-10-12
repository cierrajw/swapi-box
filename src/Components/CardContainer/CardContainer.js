import React from 'react';
import Card from '../Card/Card';
import './card-container.css';
import PropTypes from 'prop-types';

const CardContainer = ({displayedCards}) => {
  const displayCards = displayedCards.map(card =>
    <Card 
      {...card}
      key={card.name}
    />
  )

  return (
    <div className="card-container">
     {displayCards} 
    </div>
  );
}

CardContainer.propTypes = {
  displayedCards: PropTypes.array
}

export default CardContainer;
