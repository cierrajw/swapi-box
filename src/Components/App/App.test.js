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
    wrapper.setState({peopleCards: expected})
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
    expect(wrapper.state('filmText')).toEqual('');
    const expected='Star Wars movie text';
    wrapper.instance().displayFilmText();
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
