import React from 'react';
import Card from '../Card/Card'
import './card-container.css'

const CardContainer = ({items}) => {

  console.log(items);

  const displayCards = items.map(card =>
    <Card
      {...card}
      key={card.name}
    />
  )

  return (
    <div className="card-container">

     <section>{displayCards}</section>

    </div>
  );
}

export default CardContainer;
