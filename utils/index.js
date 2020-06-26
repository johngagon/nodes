/*
error proof programming in javascript

*/


console.log('hi');

const {array} = require('./coretest/array');
const {unique} = require('./array-utils');
const {average, select} = require('./function-utils');
const {query} = require('./query');
const {isAlphaNumeric} = require('./regex-utils');
const greets = [{a:'hi',b:'john',c:'gagon'}, {a:'greetings',b:'ray', c:'lavalley'}];
const {safe} = require('./safe/safe');
const Maybe = require('crocks/Maybe')
const {Just, Nothing} = Maybe;

const input = Just(2);

const testArray = [1,2,3,4];

//find can return undefined for a javascript so we have a safe way. it captures the precondition and arguments.
const result = safe.find(undefined);//safe.find(testArray, (element => element > 2));
//console.log(result);

const badResult = (() => undefined)();
const good = badResult ?? {name: 'no entry'} //not provided, not applicable, unknown, not initialized, none. no value yet
console.log(good);

//how to destructure with various possible undefineds. defalting a destructure is like ?? its parent.
const NONE = 'None';
const row = undefined;
const {status=NONE} = row ?? {};
console.log(status);

const complexObj = {
  firstName: 'Joe',
  lastName: 'Bleau',
  score: 219,
  average: 101.2,
  goals:{
    scores: [1.4, 2.1, 0.9, 5.1, 3.2],
    descr: 'Yes, it is all that and more'
  }
}

const expectedTemplate = {
  firstName: '',
  lastName: '',
  score: 0,
  average: 0.0,
  goals: {
    scores: [],
    descr: ''
  }
}

/*
console.log(input); // Just instance
console.log(input.inspect());//Just 2
console.log(input.toString());//Just 2
//console.log(input.either()); //requires 2 functions

console.log(input.option());//2
console.log(input.type());//Maybe

console.log(input.equals());//false
//console.log(input.bichain());
//console.log(input.coalesce());
console.log(input.zero()); // Maybe instance
ap, of, sequence, traverse, alt, chain, concat, map
constructor: of,zero,type

const nothingVal = Nothing();
console.log(nothingVal.option());
*/


const myVal = safe.getFunction(undefined);
console.log(myVal);
console.log(myVal());
const myVal2 = safe.getFunction(5);
console.log(myVal2);
console.log(myVal2());
array.test();




