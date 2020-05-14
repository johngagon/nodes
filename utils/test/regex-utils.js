const {expect} = require('chai');
const {
  isAlphaNumeric,
  isEmail
} = require('../regex-utils');

describe('Regular expression utility function', ()=> {
  describe('isAlphaNumeric', () => {
    it('should evaluate to true for common alphanumeric', () => {
      const goodAlphaNumeric = 'Johnny5';
      expect(isAlphaNumeric(goodAlphaNumeric)).to.be.true;
    });
    it('should evaluate to false for non alphanumeric', () => {
      const badAlphaNumeric = 'Joh#nny';
      expect(isAlphaNumeric(badAlphaNumeric)).to.be.false;
    });
    it('should evaluate to false for undefined alphanumeric', () => {
      expect(isAlphaNumeric(undefined)).to.be.false;
    });    
  });
  describe('isEmail', () => {
    it('should evaluate to true for common email', () => {
      const goodEmail = 'don.juan@villainsecretemails.org';
      expect(isEmail(goodEmail)).to.be.true;
    });
    it('should evaluate to false for email missing @', () => {
      const missingAt = 'spammeremail.org';
      expect(isEmail(missingAt)).to.be.false;
    });
    it('should evaluate to false for undefined email', () => {
      expect(isEmail(undefined)).to.be.false;
    });      
  });
});
