import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import './scroll-section.css'

class ScrollSection extends Component{
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
      <div className="crawl-text-div">
        <section className="filmtext-content">
          <div className="film-text">{this.state.filmText}</div>
        </section>
      </div>
    )
  }
}

export default ScrollSection;
