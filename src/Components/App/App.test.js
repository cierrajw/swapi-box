import React from 'react';
import { shallow } from 'enzyme';
import App from './App';



describe('App', () => {
  let wrapper;
  let mockEvent;

  beforeEach(() => {
    wrapper=shallow(<App />);
    mockEvent=jest.fn();
  })

  it.skip('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should invoke displayFilmText on page load', () => {
    wrapper.instance().displayFilmText(mockEvent);
    expect(mockEvent).toHaveBeenCalled();
  })

})
