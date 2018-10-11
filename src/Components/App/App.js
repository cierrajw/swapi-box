import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import LandingPage from '../LandingPage/LandingPage';
import './App.css';
import { fetchPeople } from './helper.js'

class App extends Component {
  constructor(){
    super();

    this.state = {
      peopleCards: [],
      favoriteCards: [],
      redirect: false,
      filmTextShown: true
    }
  }

  componentDidMount() {

  }

  displayPeopleCards = async() => {
    const peopleData = await fetchPeople();
    this.setState({peopleCards: peopleData});
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
         <LandingPage displayedCards={this.state.peopleCards} displayCards={this.displayPeopleCards}/>
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

export default App;
