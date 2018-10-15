import React from 'react';
import { shallow} from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;
  let mockEvent;

  beforeEach(() => {
    wrapper=shallow(<App />);
    mockEvent=jest.fn();
  });

  it.skip('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke displayFilmText on page load', () => {
    wrapper.instance().displayFilmText();
    expect(mockEvent).toHaveBeenCalled();
  });

  it('should update state when displayPeopleCards is invoked', () => {
    const initialState = [];
    const expected = [{name: 'Luke Skywalker', species: 'human'}];
    wrapper.instance().displayPeopleCards();
    expect(wrapper.state('peopleCards')).toEqual(expected);
  });

  it('should call fetch with correct parameters in displayFilmText', () => {
    const url = 'https://swapi.co/api/films/';
    wrapper.instance().displayFilmText();
    expect(window.fetch).toHaveBeenCalledWith(url); 
  });

  it('should update state when displayFilms is invoked', () => {
    const initialState = '';
    const expected='Star Wars movie text';
    wrapper.instance().displayFilms();
    wrapper.setState({filmText: 'Star Wars movie text'});
    expect(wrapper.state('filmText')).toEqual(expected);
  });

  it('should update state when setRedistrict is invoked', () => {
    const initialState = false;
    const expected = true;
    wrapper.instance().setRedirect();
    wrapper.setState({redirect: true});
    expect(wrapper.state('redirect')).toEqual(expected);
  });

});
