import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card.js';

describe('Card', () => {

  let mockedHandleClick;
  let wrapper;

  beforeEach(()=>{

    mockedHandleClick = jest.fn();

    wrapper = shallow(<Card addFavorites={mockedHandleClick}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call addFavorites method from App', () => {

    wrapper.instance().handleFavoriteClick();

    expect(mockedHandleClick).toBeCalled();

  });

});
