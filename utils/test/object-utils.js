const {expect} = require('chai');
const {
  diff
} = require('../object-utils');

describe('Object utility function', ()=> {
  describe('diff', () => {
    it('should execute without exception', () => {
      const obj1 = {
        x: 4,
        y: 2,
        z: {
          a: 1,
          b: 2,
          c: 2
        },
        zz: {
          a: 1,
          b: 2,
          c: 2
        },
        zzz:{},
        y:[3,2,1]
      };
      const obj2 = {
        x: 56,
        y: 2,
        z: {
          a: 1,
          b: 2,
          c: 2
        },
        zz: {
          a: 2,
          b: 1,
          c: 2
        },
        xx:{},
        y:[1,2,3]
      };
      const result = diff(obj1,obj2);
      const expected = [
        { x: 4, y: { '0': 3, '2': 1 }, z: {}, zz: { a: 1, b: 2 }, zzz: {} },
        { x: 56, y: { '0': 1, '2': 3 }, z: {}, zz: { a: 2, b: 1 }, xx: {} }
      ];

      expect(result).to.deep.equal(expected);
    });
  });
});
