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
    return Promise.resolve({
      json: () => Promise.resolve(mockPeople)
    })
  })

  });

  describe('fetchPeople', () => {

    it.skip('should fetch with correct params', async () => {

      const expected = 'https://swapi.co/api/people/';

      await helper.fetchPeople(expected);

      expect(window.fetch).toHaveBeenCalledWith(expected);

    });

  });

  describe('fetchSpecies', () => {

    it('should call fetchSpecies with correct params', async () => {
      //setup

      const expectedURL = "https://swapi.co/api/species/1/";

      await helper.fetchSpecies(expectedURL);

      expect(window.fetch).toHaveBeenCalledWith(expectedURL);

    });

    it('should return an object if fetch is successful', async () => {

      // let mockObj = {species: 'human', language: 'anglish'}

      let mockObj = {language: 'anglish'}

      window.fetch = jest.fn().mockImplementation(()=>{
        return Promise.resolve({
          json: () => Promise.resolve(mockObj)
        })
      })

      const expectedURL = "https://swapi.co/api/species/1/";

      const result = await helper.fetchSpecies(expectedURL);

      console.log(result)

      expect(result).toEqual(mockObj)

    });

  });

  describe('fetchHomeWorld', () => {

    it('should call fetchHomeWorld with correct params', () => {
      //setup

      // const expectedURL = "https://swapi.co/api/species/1/";
      //
      // await helper.fetchHomeWorld(expectedURL);
      //
      // expect(window.fetch).toHaveBeenCalledWith(expectedURL);
    });

  });

});
