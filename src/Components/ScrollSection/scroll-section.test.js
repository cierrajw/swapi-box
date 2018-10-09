import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import ScrollSection from './ScrollSection.js';

describe('Scroll Section', () => {

  it('should match the snapshot', () => {

    const wrapper = shallow(<ScrollSection />);

    expect(wrapper).toMatchSnapshot();

  });

});
