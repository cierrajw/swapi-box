import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Header from './Header.js';

describe('Header', () => {

  it('should match the snapshot', () => {

    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();

  });

});
