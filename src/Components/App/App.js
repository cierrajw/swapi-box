import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import './App.css';
import { fetchPeople, fetchVehicles, fetchPlanets} from './helper.js';

class App extends Component {
  constructor(){
    super();

    this.state = {
      filmText: '',
      peopleCards: [],
      planetsCards: [],
      vehiclesCards: [],
      allCards: [],
      favoriteCards: [],
      redirect: false,
      filmTextShown: true
    };
  }

  componentDidMount() {
    this.displayFilmText();
  }

  
  addFavorites = (id) =>{

    const newFavoriteCard = this.state.allCards.find(card=>{
      return card.id === id;
    });

    newFavoriteCard.favorite = !newFavoriteCard.favorite;

    // if(newFavoriteCard.favorite) {
    //   localStorage.setItem(newFavoriteCard.name, JSON.stringify(newFavoriteCard))
    // }

    this.handleFavorites(newFavoriteCard);
  }

  handleFavorites = (newFavoriteCard) => {
    if (!newFavoriteCard.favorite) {
      const unfavorites = this.state.favoriteCards.filter(card => card.name !== newFavoriteCard.name)
      this.setState({ 
        favoriteCards: unfavorites
      })
    }

    let duplicate = false
    this.state.favoriteCards.forEach(fave => {
      if(fave.name === newFavoriteCard.name) {
        return duplicate = true
      }
    })
    if (duplicate === true) return

    if(newFavoriteCard.favorite) {
      const favoriteCards = [newFavoriteCard, ...this.state.favoriteCards];
        this.setState({
          favoriteCards
        });
      localStorage.setItem(newFavoriteCard.name, JSON.stringify(newFavoriteCard))
    }
  }

  displayFavorites = () => {

    const newFavorites = this.state.favoriteCards;

    this.setState({
      allCards: newFavorites
    });

  }

  getPeopleCards = async () =>{
    let peopleData;

    if (!this.state.peopleCards.length) {
      peopleData = await fetchPeople();
      localStorage.setItem('people', JSON.stringify(peopleData));
      this.setState({
        peopleCards: peopleData,
        allCards: peopleData
      });
    }

    const peopleStorage = localStorage.getItem('people');
    this.setState({ allCards: JSON.parse(peopleStorage) });
  }

  getPlanetCards = async () =>{
    let planetData;

    if (!this.state.planetsCards.length) {
      planetData = await fetchPlanets();
      localStorage.setItem('planets', JSON.stringify(planetData));
      this.setState({
        planetsCards: planetData,
        allCards: planetData
      });
    }

    const planetStorage = localStorage.getItem('planets');
    this.setState({ allCards: JSON.parse(planetStorage) });
  }

  getVehicleCards = async () => {
    let vehicleData;

    if (!this.state.vehiclesCards.length) {
      vehicleData = await fetchVehicles();
      localStorage.setItem('vehicles', JSON.stringify(vehicleData));
      this.setState({
        vehiclesCards: vehicleData,
        allCards: vehicleData
      });
    }

    const vehicleStorage = localStorage.getItem('vehicles');
    this.setState({ allCards: JSON.parse(vehicleStorage) });
  }

  displayFilmText = async() => {
    try {
      const response = await fetch('https://swapi.co/api/films/');
      const data = await response.json();
      const filmTextResult = await this.getFilm(data.results);
      return filmTextResult
    } catch (error) {
      throw new Error(error.message);
    }
  }

  getFilm = (films) => {
    const filmScrolls = films.map(film => {
      return film.opening_crawl;
    });
    const randomScroll = filmScrolls[Math.floor(Math.random() * filmScrolls.length + 1)];
    this.setState({filmText: randomScroll});
  }

  setRedirect = () =>{
    this.setState({
      redirect: true
    });
  }

  render() {
    const { redirect} = this.state;

    if (redirect){
      return (
        <LandingPage
          getVehicleCards={this.getVehicleCards}
          getPeopleCards={this.getPeopleCards}
          getPlanetCards={this.getPlanetCards}
          filmText={this.state.filmText}
          allCards={this.state.allCards}
          favoriteCards={this.state.favoriteCards}
          addFavorites={(id)=>this.addFavorites(id)}
          displayFavorites={this.displayFavorites}
        />
      );

    } else {

      return (
        <main className="main-div">
          <div className="swapi-button-section">
            <h1 className="swapi-intro-title">swapi-box</h1>
            <button className="intro-swapi-button">Explore!</button>
          </div>
          <div className="crawl-text-div">
            <section className="filmtext-content">
              <div className='film-text' onClick={this.setRedirect}>{this.state.filmText}</div>
            </section>
          </div>
        </main>
      );
    }
  }
}

export default App;
