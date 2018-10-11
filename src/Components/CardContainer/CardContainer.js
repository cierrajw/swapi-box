import React from 'react';
import Card from '../Card/Card'
import './card-container.css'

const CardContainer = ({displayedCards}) => {
  const displayCards = displayedCards.map(card =>
    <Card 
      {...card}
      key={card.name}
    />
  )
  // console.log(displayCards)
  return (
    <div className="card-container">
     {displayCards} 
    </div>
  );
}

export default CardContainer;
