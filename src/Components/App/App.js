import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import LandingPage from '../LandingPage/LandingPage';
import './App.css';
import { fetchPeople, fetchVehicles } from './helper.js'

class App extends Component {
  constructor(){
    super();

    this.state = {
      filmText: '',
      peopleCards: [],
      planetsCards: [],
      vehiclesCards: [],
      items: [],
      favoriteCards: [],
      redirect: false,
      filmTextShown: true,
    }
  }

  componentDidMount() {
    this.displayFilmText()
  }

  getPeopleCards = async () =>{

    const peopleData = await fetchPeople();

    this.setState({
      peopleCards: peopleData,
      items: peopleData
    })
  }

  getVehicleCards = async () => {
    const vehicleData = await fetchVehicles();

    this.setState({
      vehiclesCards: vehicleData,
      items: vehicleData
    })
  }

  displayFilmText = () => {
    try {
      fetch('https://swapi.co/api/films/')
        .then(response => response.json())
        .then(starWarsData => this.getFilm(starWarsData.results))
    } catch(error) {
    }
  }

  getFilm = (films) => {
    const filmScrolls = films.map((film, index) => {
      return film.opening_crawl;
    })
    const randomScroll = filmScrolls[Math.floor(Math.random() * filmScrolls.length + 1)]
    this.setState({filmText: randomScroll})
  }

  setRedirect = () =>{
    this.setState({
      redirect: true,
    })
  }

  render() {
    const { redirect, filmTextShown, peopleCards, vehiclesCards} = this.state;

     if(redirect){
       return(
         <LandingPage
         displayPeopleCards={peopleCards}
         displayVehicleCards={vehiclesCards}
         getVehicleCards={this.getVehicleCards}
         getPeopleCards={this.getPeopleCards}
         filmText={this.state.filmText}
         items={this.state.items}/>
       )
     }else{
       return(
         <main className="main-div">
         <div className="swapi-button-section">
         <h1 className="swapi-intro-title">SwapiBox</h1>
         <button className="swapi-button">Explore!</button>
         </div>
         <div className="crawl-text-div">
           <section className="filmtext-content">
             <div className='film-text' onClick={this.setRedirect}>{this.state.filmText}</div>
           </section>
         </div>
         </main>
       )
    }
  }
}

export default App;
