import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import LandingPage from '../LandingPage/LandingPage';
import './App.css';
import { fetchPeople } from './helper.js'

class App extends Component {
  constructor(){
    super();

    this.state = {
      filmText: '',
      peopleCards: [],
      favoriteCards: [],
      redirect: false,
      filmTextShown: true,
    }
  }

  componentDidMount() {
    this.displayFilmText()
  }

  displayPeopleCards = async() => {
    const peopleData = await fetchPeople();
    this.setState({peopleCards: peopleData});
  }

  displayFilmText = () => {
    try {
      fetch('https://swapi.co/api/films/')
        .then(response => response.json())
        .then(starWarsData => this.getFilm(starWarsData.results))
    } catch(error) {
      console.log(error)
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
      filmTextShown: false
    })
  }

  render() {
    const { redirect, filmTextShown } = this.state;

     if(redirect && !filmTextShown){
       return(
         <LandingPage displayedCards={this.state.peopleCards} displayCards={this.displayPeopleCards} filmText={this.state.filmText}/>
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
