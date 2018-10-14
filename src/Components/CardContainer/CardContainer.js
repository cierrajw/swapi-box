import React from 'react';
import Card from '../Card/Card';
import './card-container.css';
import PropTypes from 'prop-types';

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

CardContainer.propTypes = {
  displayedCards: PropTypes.array
}

export default CardContainer;
