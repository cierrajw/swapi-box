import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage.js';

describe('Landing Page', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper).toMatchSnapshot();
  });

});
