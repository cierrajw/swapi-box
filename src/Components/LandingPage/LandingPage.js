import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';

class LandingPage extends Component{
  constructor(){
    super();

    this.state={
      filmText: ''
    }
  }

  componentDidMount = () => {
    this.displayFilmText()
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

  render(){
    return(
      <div>{this.state.filmText}</div>
    )
  }
}

export default LandingPage;
