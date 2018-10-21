import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import { fetchPeople, fetchVehicles, fetchPlanets} from './helper.js';
import rebelIcon from "../../assets/Images/rebel-alliance.png";
import { Route, NavLink } from 'react-router-dom';
import './App.css'

class App extends Component {
  constructor(){
    super();

    this.state = {
      homepage: true,
      film: {},
      peopleCards: [],
      planetsCards: [],
      vehiclesCards: [],
      allCards: [],
      favorites: [],
      type: '',
      redirect: false
    };
  }

  componentDidMount() {
    this.displayFilmText();
  }

  toggleFavorite = (id, type) =>{
    const categoryCards = this.state[`${type}Cards`].map(card => {
      if (card.id === id) {
        return {...card, favorite: !card.favorite};
        // const filteredCards = this.state[`${type}Cards`].filter(card => return card)
        // localStorage.setItem(`${type}`, JSON.stringify(filteredCard));
      }
      return card;
    });

    const allCards = this.state.allCards.map(card => {
      if (card.id === id) {
        return {...card, favorite: !card.favorite};

      }
      return card;
    });

    // const filteredCards = this.state.allCards.filter(card => {
    //   return card.favorite
    // })

    this.setState({
      allCards,
      // favorites: filteredCards,
      [`${type}Cards`]: categoryCards
    });
  }



  displayFavorites = () => {

    const favoritePeople = this.state.peopleCards.filter(person => person.favorite);
    const favoritePlanets = this.state.planetsCards.filter(planet => planet.favorite);
    const favoriteVehicles = this.state.vehiclesCards.filter(vehicle => vehicle.favorite);

    const allFavorites = [...favoritePeople, ...favoritePlanets, ...favoriteVehicles];

    this.setState({
      allCards: allFavorites,
      favorites: allFavorites
    });

    // if(!this.state.allcards) {
    //   this.setState({
    //     allCards: [{ name: "YOU HAVE NO FAVORITES"}]
    //   });
    // }

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
    // this.setState({ allCards: JSON.parse(peopleStorage) });
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
      return filmTextResult;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  getFilm = (films) => {
    const filmScrolls =films.map(film => {
      return film;
    });

    const randomScroll = filmScrolls[Math.floor(Math.random() * filmScrolls.length + 1)];
    const film = {scroll: randomScroll.opening_crawl, date: randomScroll.release_date, title: randomScroll.title};
    this.setState({
      film
    });
  }

  openLandingPage = () =>{
    this.setState({ homepage: false }) 
  }


  render() {
    const scroll = this.state.film.scroll;
    const title = this.state.film.title;
    const date = this.state.film.date;

    if (this.state.homepage){
      return (
        <div>
          <div className="intro-page">
            <h1 className="swapi-intro-title">swapi-box</h1>
            <NavLink to='/landingpage' className='nav' onClick={this.openLandingPage}>
              <button className="intro-swapi-button">
                <img src={rebelIcon} width="80" height="80" alt="" />
              </button>
            </NavLink>
            <main className="main-div">
              <div className="crawl-text-div">
                <section className="filmtext-content">
                  <div className='film-text'>
                    <p>{scroll}</p>
                    <h2>{title}</h2>
                    <h5>{date}</h5>
                  </div>
                </section>
              </div>
            </main>
          </div>
        </div>
      )
    }else if (!this.state.homepage){
      return(
        <div>
          <Route exact path='/landingpage' render={()=>{
            return (
              <LandingPage
                getVehicleCards={this.getVehicleCards}
                getPeopleCards={this.getPeopleCards}
                getPlanetCards={this.getPlanetCards}
                filmText={this.state.film}
                allCards={this.state.allCards}
                favoriteCards={this.state.favoriteCards}
                toggleFavorite={this.toggleFavorite}
                displayFavorites={this.displayFavorites}
                favorites={this.state.favorites}
              />
            )
          }}
          />
        </div>
      )
    }
  }
}

export default App;
