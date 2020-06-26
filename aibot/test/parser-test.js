const {expect} = require('chai');

const parser = require('../parser');


const TRUE = true;
const FALSE = false;

let actualResult;
let expectedResult;

describe('general', () => {

  beforeEach(() => {
    actualResult = FALSE;
    expectedResult = FALSE;
  });

  describe('control tests', () => {
    it('should work', () => {
      actualResult = TRUE;
      expectedResult = TRUE;
      expect(actualResult).to.equal(expectedResult);
    });
  }); //use natural

  describe('parse text', () => {
    it('should parse a paragraph', () => {
      const input = `

      `
    });
  });
  
});