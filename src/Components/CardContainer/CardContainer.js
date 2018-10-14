import React from 'react';
import Card from '../Card/Card'
import './card-container.css'

const CardContainer = ({displayPeopleCards, displayVehicleCards}) => {

  const displayedPeopleCards = displayPeopleCards.map(card =>
    <Card
      {...card}
      key={card.name}
    />
  )

  const displayedVehicleCards = displayVehicleCards.map(card=>{
    return <Card
      {...card}
      key={card.name}
    />
  })

  if(){
    return (
      <div className="card-container">{displayedPeopleCards}</div>
    )
  }else if(){
    return (
      <div className="card-container">

       <section>{displayedVehicleCards}</section>

      </div>
    );
  }

}

export default CardContainer;
