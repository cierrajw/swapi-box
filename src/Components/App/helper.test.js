import React from 'react';
import { shallow } from 'enzyme';
import helper from './helper.js'

describe('Helper', () => {

  describe('fetchPeople', () => {

    let mockName;
    let mockPersonObj;

    beforeEach(()=>{

    mockPersonObj = {
    "results": [
        {
            "name": "Luke Skywalker"
        }
      ]
    }

    window.fetch = jest.fn().mockImplementation(()=>{
      Promise.resolve({
        json: () => Promise.resolve(mockPersonObj)
      })
    })
  })

    it('should fetch  with correct params', () => {
      //setup
    });

  });

  describe('fetchNames', () => {

    it('should call fetchNames with correct params', () => {
      //setup
    });

  });

});
