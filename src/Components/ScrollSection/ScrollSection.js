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
    console.log(this.state.filmText)
  }

  displayFilmText = () => {
    try {
      fetch('https://swapi.co/api/films/')
        .then(response => response.json())
        .then(starWarsData => this.getFilm(starWarsData.results))
    } catch(error) {
      throw new Error(error.message)
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
      <div className="scroll-div">
        <section>
          <div>{this.state.filmText}</div>
        </section>
      </div>
    )
  }
}

export default ScrollSection;
