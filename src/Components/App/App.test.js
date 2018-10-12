import React from 'react';
import { shallow } from 'enzyme';
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

  it('should invoke displayFilmText on page load', () => {
    wrapper.instance().displayFilmText();
    expect(mockEvent).toHaveBeenCalled();
  });

  it('should update state when displayPeopleCards is invoked', () => {
    
  });

  it('should call fetch with correct parameters in displayFilmText', () => {

  });

  it('should update state when displayFilms is invoked', () => {

  });

  it('should update state when setRedistrict is invoked', () => {
    
  })
  
})
