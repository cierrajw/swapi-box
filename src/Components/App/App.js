import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import LandingPage from '../LandingPage/LandingPage';
import './App.css';
import { fetchPeople, fetchVehicles, fetchPlanets} from './helper.js'

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
    let peopleData;

    if(!this.state.peopleCards.length) {
      peopleData = await fetchPeople();
      localStorage.setItem('people', JSON.stringify(peopleData))
      this.setState({
        peopleCards: peopleData,
        items: peopleData
      })
    }

    const peopleStorage = localStorage.getItem('people');
    this.setState({ items: JSON.parse(peopleStorage) })
  }

  getPlanetCards = async () =>{
    let planetData;

    if(!this.state.planetsCards.length) {
      planetData = await fetchPlanets();
      localStorage.setItem('planets', JSON.stringify(planetData))
      this.setState({
        planetsCards: planetData,
        items: planetData
      })
    }

    const planetStorage = localStorage.getItem('planets');
    this.setState({ items: JSON.parse(planetStorage) });
  }

  getVehicleCards = async () => {
    let vehicleData;

    if(!this.state.vehiclesCards.length) {
      vehicleData = await fetchVehicles();
      localStorage.setItem('vehicles', JSON.stringify(vehicleData))
      this.setState({
        vehiclesCards: vehicleData,
        items: vehicleData
      })
    }

    const vehicleStorage = localStorage.getItem('vehicles');
    this.setState({ items: JSON.parse(vehicleStorage) })
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
         getVehicleCards={this.getVehicleCards}
         getPeopleCards={this.getPeopleCards}
         getPlanetCards={this.getPlanetCards}
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
