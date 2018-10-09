import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import SideNav from './SideNav.js';

describe('Side Nav', () => {

  it('should match the snapshot', () => {

    const wrapper = shallow(<SideNav />);

    expect(wrapper).toMatchSnapshot();

  });

});
