
const {expect} = require('chai');

const emptyArray = [];
const arrayOfFalseyEmptiness = [undefined, 0, NaN, null, '', false];
const arrayOfTruthyEmptiness = [{}, []];
const arrayOfMixed = ['a', 1, {name: ''}, ['x','y'], true, [], {}, undefined, 0, null, '', false, NaN];
const goodArray = ['apple', 'pear', 'banana'];

const undefinedArg = undefined;
const zeroArg = 0;
const nanArg = NaN;
const emptyStrArg = '';
const nullArg = null;
const falseArg = false;
const numArg = 10;
const fullStrArg = 'apple';
const objectArg = {name: 'value', desc: 'something'};
const trueArg = true;
let result;

describe('array', () => {

  beforeEach(() => {
    result = undefined;
  });

  describe('concat', () => {
    describe('using empty to invoke', () =>{
      it('should give expected result all arg types', () => {
        result = emptyArray.concat(undefinedArg);
        expect(result).to.deep.equal([undefined]);

        result = emptyArray.concat(zeroArg);
        expect(result).to.deep.equal([0]);

        result = emptyArray.concat(undefined, undefined);
        expect(result).to.deep.equal([undefined, undefined]);

        result = emptyArray.concat(arrayOfMixed);
        expect(result).to.deep.equal(['a', 1, {name: ''}, ['x','y'], true, [], {}, undefined, 0, null, '', false, NaN]);
        

        result = emptyArray.concat(arrayOfMixed, undefinedArg, fullStrArg, objectArg);
        expect(result).to.deep.equal(['a', 1, {name: ''}, ['x','y'], true, [], {}, undefined, 0, null, '', false, NaN, undefined, 'apple', objectArg]);
      });
    });
    describe('using goodArray to invoke', () =>{
      it('should give expected result all arg types', () => {
        result = goodArray.concat(undefinedArg);
        expect(result).to.deep.equal(['apple', 'pear', 'banana', undefined]);

        result = goodArray.concat(zeroArg);
        expect(result).to.deep.equal(['apple', 'pear', 'banana', 0]);

        result = goodArray.concat(undefined, undefined);
        expect(result).to.deep.equal(['apple', 'pear', 'banana', undefined, undefined]);

        result = goodArray.concat(arrayOfMixed);
        expect(result).to.deep.equal(['apple', 'pear', 'banana', 'a', 1, {name: ''}, ['x','y'], true, [], {}, undefined, 0, null, '', false, NaN]);
        

        result = goodArray.concat(arrayOfMixed, undefinedArg, fullStrArg, objectArg);
        expect(result).to.deep.equal(['apple', 'pear', 'banana', 'a', 1, {name: ''}, ['x','y'], true, [], {}, undefined, 0, null, '', false, NaN, undefined, 'apple', objectArg]);
      });
    });
    describe('using arrayOfMixed to invoke', () =>{
      it('should give expected result all arg types', () => {
        result = arrayOfMixed.concat(undefinedArg);
        expect(result).to.deep.equal(['a', 1, {name: ''}, ['x','y'], true, [], {}, undefined, 0, null, '', false, NaN, undefined]);

        result = arrayOfMixed.concat(zeroArg);
        expect(result).to.deep.equal(['a', 1, {name: ''}, ['x','y'], true, [], {}, undefined, 0, null, '', false, NaN, 0]);

        result = arrayOfMixed.concat(undefined, undefined);
        expect(result).to.deep.equal(['a', 1, {name: ''}, ['x','y'], true, [], {}, undefined, 0, null, '', false, NaN, undefined, undefined]);

        result = arrayOfMixed.concat(arrayOfMixed);
        expect(result).to.deep.equal(['a', 1, {name: ''}, ['x','y'], true, [], {}, undefined, 0, null, '', false, NaN, 'a', 1, {name: ''}, ['x','y'], true, [], {}, undefined, 0, null, '', false, NaN]);
        

        result = arrayOfMixed.concat(arrayOfMixed, undefinedArg, fullStrArg, objectArg);
        expect(result).to.deep.equal(['a', 1, {name: ''}, ['x','y'], true, [], {}, undefined, 0, null, '', false, NaN, 'a', 1, {name: ''}, ['x','y'], true, [], {}, undefined, 0, null, '', false, NaN, undefined, 'apple', objectArg]);
      });
    });
  });
  
  describe('copyWithin', () => {
    it('passes', () => {
      expect(true).to.be.true;
    });
  });

});

/*
.length
.constructor
.prototype

describe('desc', () => {
  it('passes', () => {
    expect(true).to.be.true;
  });
});

concat()	Joins two or more arrays, and returns a copy of the joined arrays
copyWithin()	Copies array elements within the array, to and from specified positions
entries()	Returns a key/value pair Array Iteration Object
every()	Checks if every element in an array pass a test
fill()	Fill the elements in an array with a static value
filter()	Creates a new array with every element in an array that pass a test
find()	Returns the value of the first element in an array that pass a test
findIndex()	Returns the index of the first element in an array that pass a test
forEach()	Calls a function for each array element
from()	Creates an array from an object
includes()	Check if an array contains the specified element
indexOf()	Search the array for an element and returns its position
isArray()	Checks whether an object is an array
join()	Joins all elements of an array into a string
keys()	Returns a Array Iteration Object, containing the keys of the original array
lastIndexOf()	Search the array for an element, starting at the end, and returns its position
map()	Creates a new array with the result of calling a function for each array element
pop()	Removes the last element of an array, and returns that element
push()	Adds new elements to the end of an array, and returns the new length
reduce()	Reduce the values of an array to a single value (going left-to-right)
reduceRight()	Reduce the values of an array to a single value (going right-to-left)
reverse()	Reverses the order of the elements in an array
shift()	Removes the first element of an array, and returns that element
slice()	Selects a part of an array, and returns the new array
some()	Checks if any of the elements in an array pass a test
sort()	Sorts the elements of an array
splice()	Adds/Removes elements from an array
toString()	Converts an array to a string, and returns the result
unshift()	Adds new elements to the beginning of an array, and returns the new length
valueOf()	Returns the primitive value of an array

*/

/*
cases:

1. emptyArray.method(arr1, arr2)/.prop
  a. truthy empties [], {}
  b. the six falsey empties: undefined, null, NaN, 0, false, '' the six (only primitive and unconverted of these are falsey)
  c. array full of truthy empties and falsey empties
  d. full array
  e. arrays of mixed

2. array of falseys and empties.method


  a. truthy empties [], {}
  b. the six falsey empties: undefined, null, NaN, 0, false, '' the six (only primitive and unconverted of these are falsey)
  c. array full of truthy empties and falsey empties
  d. full array
  e. arrays of mixed



3. full array.method


  a. truthy empties [], {}
  b. the six falsey empties: undefined, null, NaN, 0, false, '' the six (only primitive and unconverted of these are falsey)
  c. array full of truthy empties and falsey empties
  d. full array
  e. arrays of mixed



4. mixes of full and both empty types.method
  i. truthy empties [], {}
  ii. the six falsey empties: undefined, null, NaN, 0, false, '' the six (only primitive and unconverted of these are falsey)
  iii. array full of truthy empties and falsey empties
  iv. full array
  v. arrays of mixed
*/