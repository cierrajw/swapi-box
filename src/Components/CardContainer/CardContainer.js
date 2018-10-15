import React from 'react';
import Card from '../Card/Card';
import './card-container.css';
import PropTypes from 'prop-types';

const CardContainer = ({allCards, addFavorites}) => {

  const displayCards = allCards.map(card =>

    <Card
      {...card}
      key={card.name}
      addFavorites={(id)=>addFavorites(id)}
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
