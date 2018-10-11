import React from 'react';
import { shallow } from 'enzyme';
import * as helper from './helper.js'

describe('Helper', () => {

  let mockPerson;
  let mockPeople;

  beforeEach(()=>{

  mockPeople =
    [
      {
        "name": "Luke Skywalker"
      }
    ]

  mockPerson = {
    [
      {
        "name:" "Luke Skywalker"
      }
    ]
  }

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


  });

  describe('fetchSpecies', () => {

    it('should call fetchNames with correct params', () => {
      expect(window.fetch).toHaveBeenCalledWithS()
    });


  });

  describe('fetchHomeWorld', () => {

    it('should call fetchNames with correct params', () => {
      //setup
    });

  });



});
