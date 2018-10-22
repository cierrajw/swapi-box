import * as helper from './helper.js';

describe('Helper', () => {

  let mockPeople;

  beforeEach(()=>{
    mockPeople = {results: [{ "name": "Luke Skywalker" }] };
    window.fetch = jest.fn().mockImplementation(()=>{
      return Promise.resolve({
        json: () => Promise.resolve(mockPeople)
      });
    });

  });

  describe('fetchPeople', () => {
    
    it('should fetch with correct params', async () => {
      const expected = 'https://swapi.co/api/people/';
      await helper.fetchPeople(); 
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('should return an object if response is ok', async () => {
      const url = 'https://swapi.co/api/people/'; 
      const expected = [{
        "favorite": false, 
        "homeworld": undefined,  
        "language": undefined, 
        "name": "Luke Skywalker", 
        "population": undefined, 
        "species": undefined, 
        "type": "people"
      }];
      const result = await helper.fetchPeople(url);
      expect(result).toEqual(expected);
    });

  });

  describe('fetchSpecies', () => {

    it('should call fetchSpecies with correct params', async () => {
      const expectedURL = "https://swapi.co/api/species/1/";
      await helper.fetchSpecies(expectedURL); 
      expect(window.fetch).toHaveBeenCalledWith(expectedURL);
    });

    it('should return an object if fetch is successful', async () => {
      let mockObj = {language: 'anglish', type: 'species'};
      window.fetch = jest.fn().mockImplementation(()=>{
        return Promise.resolve({
          json: () => Promise.resolve(mockObj)
        });
      });

      const expectedURL = "https://swapi.co/api/species/1/";
      const result = await helper.fetchSpecies(expectedURL);
      expect(result).toEqual(mockObj);
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
