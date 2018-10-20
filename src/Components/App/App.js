import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import './App.css';
import { fetchPeople, fetchVehicles, fetchPlanets} from './helper.js';

class App extends Component {
  constructor(){
    super();

    this.state = {
      filmTitle: '',
      filmText: '',
      peopleCards: [],
      planetsCards: [],
      vehiclesCards: [],
      allCards: [],
      favoriteCards: [],
      unfavorites: [],
      redirect: false,
      filmTextShown: true
    };
  }

  componentDidMount() {
    this.displayFilmText();
  }

  // toggleFavorite
  addFavorites = (id, type) =>{
    const categoryCards = this.state[`${type}Cards`].map(card => {
      if(card.id === id) {
        return {...card, favorite: !card.favorite}
      }
      return card
    })

    const allCards = this.state.allCards.map(card => {
      if(card.id === id) {
        return {...card, favorite: !card.favorite}
      }
      return card;
    })

    this.setState({
      allCards,
      [`${type}Cards`]: categoryCards,
    })
  }

//   const allCards = this.state.allCards.map(card => {
//     if(card.id === id) {
//       const foundCard={...card, favorite: !card.favorite}
//       const filteredCards = this.state.allCards.filter(card => card.favorite))
//     }
//     return card;
//   })
//
//   this.setState({
//     allCards,
//     [`${type}Cards`]: categoryCards,
//   })
// }

  // handleFavorites = (newFavoriteCard) => {
  //   if (!newFavoriteCard.favorite) {
  //     const unfavorites = this.state.favoriteCards.filter(card => card.name !== newFavoriteCard.name)
  //     this.setState({
  //       favoriteCards: unfavorites,
  //       allCards: this.state.favoriteCards
  //     })
  //   } else {
  //     const favoriteCards = [newFavoriteCard, ...this.state.favoriteCards];
  //       this.setState({
  //         favoriteCards: favoriteCards,
  //       });
  //     localStorage.setItem(newFavoriteCard.name, JSON.stringify(newFavoriteCard))
  //   }
  //
  //   let duplicate = false
  //   this.state.favoriteCards.forEach(fave => {
  //     if(fave.name === newFavoriteCard.name) {
  //       return duplicate = true
  //     }
  //   })
  //
  //   if (duplicate === true) return
  //
  // }

  displayFavorites = () => {

    const favoritePeople = this.state.peopleCards.filter(person => person.favorite);
    const favoritePlanets = this.state.planetsCards.filter(planet => planet.favorite);
    const favoriteVehicles = this.state.vehiclesCards.filter(vehicle => vehicle.favorite);

    const allFavorites = [...favoritePeople, ...favoritePlanets, ...favoriteVehicles];

    this.setState({
      allCards: allFavorites
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
      return film
    });
    const randomScroll = filmScrolls[Math.floor(Math.random() * filmScrolls.length + 1)];
    this.setState({
      filmTitle: randomScroll.title + ':' + randomScroll.episode_id,
      filmText: randomScroll.opening_crawl
    });
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
          addFavorites={this.addFavorites}
          displayFavorites={this.displayFavorites}
        />
      );

    } else {
      const filmText = this.state.filmText
      const filmTitle = this.state.filmTitle;

      return (
        <main className="main-div">
          <div className="swapi-button-section">
            <h1 className="swapi-intro-title">swapi-box</h1>
            <button className="intro-swapi-button">Explore!</button>
          </div>
          <div className="crawl-text-div">
            <section className="filmtext-content">
              <div className='film-text' onClick={this.setRedirect}>
                <h2>{filmTitle}</h2>
                <p>{filmText}</p>
              </div>
            </section>
          </div>
        </main>
      );
    }
  }
}

export default App;
