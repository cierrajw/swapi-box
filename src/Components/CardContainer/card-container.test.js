import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer.js';

describe('Card Container', () => {

  let displayCards;

  beforeEach(()=>{
    displayCards = [
        {
          homeworld: 'lalla',
          species: 'human',
          language: 'Anglish',
          population: 2000
        },
        {
          homeworld: 'planet earth',
          species: 'droid',
          language: 'bblahblah',
          population: 400
        }
    ]
  });

  it('should match the snapshot', async () => {

    const wrapper = shallow(<CardContainer displayedCards={displayCards}/>);

    expect(wrapper).toMatchSnapshot();

  });

});
