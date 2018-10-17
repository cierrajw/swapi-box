import React from 'react';
import Card from '../Card/Card';
import './card-container.css';
import PropTypes from 'prop-types';

const CardContainer = ({allCards = [], addFavorites}) => {

  const displayCards = allCards.map(card =>

    <Card
      {...card}
      key={Math.random()*Date.now()}
      addFavorites={addFavorites}
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
  addFavorites: PropTypes.func
};

export default CardContainer;
