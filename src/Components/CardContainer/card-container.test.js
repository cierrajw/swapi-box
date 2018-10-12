import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer.js';

describe('Card Container', () => {

  it('should match the snapshot', () => {
    const mockProps=[{}]
    const wrapper = shallow(<CardContainer displayedCards={mockProps}/>);
    expect(wrapper).toMatchSnapshot();

  });

});
