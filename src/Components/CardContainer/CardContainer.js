import React from 'react';
import Card from '../Card/Card'
import './card-container.css'

const CardContainer = (props) => {

console.log(props.displayedCards);
  const displayCards = props.displayedCards.map(card =>
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

export default CardContainer;
