import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { fetchPeople } from './helper.js';
import LandingPage from '../LandingPage/LandingPage';
import './App.css'

class SplashPage extends Component{
  constructor(){
    super();

    this.state={
      testCards: [{name: 'bob', age: 12, species: 'human'}, {name: 'lauren', age: 23, species: 'droid'}, {name: 'lauren', age: 23, species: 'droid'}],
      displayedCards: [],
      peopleCards: [],
      favoriteCards: [],
      filmText: '',
      redirect: false,
      filmTextShown: true
    }
  }

  componentDidMount = () => {
    this.displayFilmText()
    console.log(this.state.filmText)
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
      return film.opening_crawl
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

  render(){

    const { redirect, filmTextShown } = this.state;

    if(redirect && !filmTextShown){
      return(
        <LandingPage displayedCards={this.state.testCards} displayCards={()=> this.displayPeopleCards}/>
      )
    }else{
      return(
        <div className={filmTextShown ? 'crawl-text-div' : 'film-text-no-display'}>
          <section className="filmtext-content">
            <div className='film-text' onClick={this.setRedirect}>LALALALALLALA</div>
          </section>
        </div>

      )
    }
  }
}

export default SplashPage;
