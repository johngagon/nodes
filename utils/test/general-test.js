
const {expect} = require('chai');

const TRUE = true;
const FALSE = false;

let actualResult;
let expectedResult;

describe('general', () => {

  beforeEach(() => {
    actualResult = FALSE;
    expectedResult = FALSE;
  });

  describe('feature tests', () => {
    it('should work', () => {
      actualResult = TRUE;
      expectedResult = TRUE;
      expect(actualResult).to.equal(expectedResult);
    });
  });
  
});

/*

Do test on javascript, node, express, mongo
Make safe wrappers and show sanctuary improved wrappers.
https://github.com/yousefvand/sanctuary-examples/blob/master/basic/array/at.md


*/