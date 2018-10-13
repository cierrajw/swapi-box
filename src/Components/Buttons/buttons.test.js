import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Buttons from './Buttons.js';

describe('Buttons', () => {

  let mockDisplayCards;

  beforeEach(()=>{

    mockDisplayCards = jest.fn()

  })

  it('should match the snapshot', () => {

    const wrapper = shallow(<Buttons displayCards={mockDisplayCards}/>);

    expect(wrapper).toMatchSnapshot();

  });

});
