import React from 'react';
import Card from '../Card/Card'
import './card-container.css'

const CardContainer = ({displayedCards}) => {

  console.log(displayedCards)
  const displayCards = displayedCards.map(card =>
    <Card
      {...card}
      key={card.name}
    />
  )
  return (
    <div className="card-container">
     {displayCards}
     <img src="./ajax-loader.gif"/>
    </div>
  );
}

export default CardContainer;
