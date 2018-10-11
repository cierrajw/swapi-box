import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import LandingPage from '../LandingPage/LandingPage'
import './splash-page.css'

class SplashPage extends Component{
  constructor(){
    super();

    this.state={
      filmText: '',
      redirect: false,
      filmTextShown: true
    }
  }

  componentDidMount = () => {
    this.displayFilmText()
    console.log(this.state.filmText)
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
        <LandingPage />
      )
    }else{
      return(
        <div className={filmTextShown ? 'crawl-text-div' : 'film-text-no-display'}>
          <section className="filmtext-content">
            <div className='film-text' onClick={this.setRedirect}>{this.state.filmText}</div>
          </section>
        </div>

      )
    }
  }
}

export default SplashPage;
