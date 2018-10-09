import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer.js';

describe('Card Container', () => {

  it('should match the snapshot', () => {

    const wrapper = shallow(<CardContainer />);

    expect(wrapper).toMatchSnapshot();

  });

});
