import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import Header from './Header.js';

describe('Header', () => {

  it('should match the snapshot', () => {
    const mockFavoriteCards = [{
      favorite: true,
      homeworld: "Tatooine",
      id: 908692779067.1481,
      language: "n/a",
      name: "C-3PO",
      population: "200000",
      species: "Droid",
      type: "people"
    }]
    const wrapper = shallow(<Header favoriteCards = {mockFavoriteCards} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleFavoritesClick when button is clicked', () => {
    const favoriteCards = [];
    const mockHandleFavorites = jest.fn();
    const displayFavoritesMock = jest.fn();
    const wrapper = shallow(<Header favoriteCards = {favoriteCards} displayFavorites={displayFavoritesMock} />);
    wrapper.find('button').simulate('click');
    expect(displayFavoritesMock).toHaveBeenCalled();
  });

});
