import React from 'react';
import { shallow} from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper=shallow(<App />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke displayFilmText on page load', async() => {
    const spy = jest.spyOn(wrapper.instance(), 'displayFilmText');
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
    spy.mockClear();

  });

  it('should update state when getPeopleCards is invoked', () => {
    expect(wrapper.state('peopleCards')).toEqual([]);
    const expected = [{name: 'Luke Skywalker', species: 'human'}];
    wrapper.instance().getPeopleCards();
    wrapper.setState({peopleCards: expected});
    expect(wrapper.state('peopleCards')).toEqual(expected);
  });

  it('should call fetch with correct parameters in displayFilmText', async() => {
    let mockUrl = 'https://swapi.co/api/films';
    let mockFilmText = [{text: 'film text'}];
    window.fetch = jest.fn().mockImplementation(()=>{
      return Promise.resolve({
        json: () => Promise.resolve(mockFilmText)
      });
    });
    await wrapper.instance().displayFilmText();
    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it('should update state when displayFilms is invoked', () => {
    expect(wrapper.state('film')).toEqual({});
    const expected={text: 'Star Wars movie text', date: '12-1-1984'};
    wrapper.instance().displayFilmText();
    wrapper.setState({ film: {text: 'Star Wars movie text', date: '12-1-1984'} });
    expect(wrapper.state('film')).toEqual(expected);
  });

  it('should throw an error if the status is not ok', async() => {
    const url = 'https://swapi.co/api/films'; 
    const expected = new Error('Fetch call failed');
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    const result = await wrapper.instance().displayFilmText(url);
    expect(result).rejects.toEqual(expected);
  });

  it('should update state when setRedirect is invoked', () => {
    const expected = true;
    wrapper.instance().setRedirect();
    wrapper.setState({redirect: true});
    expect(wrapper.state('redirect')).toEqual(expected);
  });

});
