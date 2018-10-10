import React from 'react';
import { shallow } from 'enzyme';
import * as helper from './helper.js'

describe('Helper', () => {

  let mockName;
  let mockPeople;

  beforeEach(()=>{

  mockPeople =
    [
      {
        "name": "Luke Skywalker"
      }
    ]

  window.fetch = jest.fn().mockImplementation(()=>{
    Promise.resolve({
      json: () => Promise.resolve(mockPeople)
    })
  })

  });

  describe('fetchPeople', () => {

    it('should fetch with correct params', async () => {

      const expected = 'https://swapi.co/api/people/';

      await helper.fetchPeople();

      expect(window.fetch).toHaveBeenCalledWith(expected);

    });

  });

  describe('fetchNames', () => {

    it('should call fetchNames with correct params', () => {
      //setup
    });

  });

});
