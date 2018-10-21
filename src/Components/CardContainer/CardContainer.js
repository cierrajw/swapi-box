import React from 'react';
import Card from '../Card/Card';
import './card-container.css';
import PropTypes from 'prop-types';

const CardContainer = ({allCards = [], toggleFavorite}) => {


  const displayCards = allCards.map(card =>
    <Card
      {...card}
      key={Math.random()*Date.now()}
      toggleFavorite={toggleFavorite}
    />
  );


  return (
    <div className="card-container">
      <section>
        {displayCards}
      </section>
    </div>
  );
};

CardContainer.propTypes = {
  displayedCards: PropTypes.array,
  toggleFavorite: PropTypes.func,
  allCards: PropTypes.array
};

export default CardContainer;
