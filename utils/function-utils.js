'use strict'; 

const composeSpread = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));//chain
const compose       = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

const take = input => {
  let pipe = fn => createPipeline(fn(input))

  pipe.and = pipe;
  pipe.value = input;

  return pipe;
}//take(3).and(add(4)).value //7

const flip = fn => a => b => fn(b)(a);

const get = property => object => object[property];//take(muppet).and(get('name')).value //Kermit 

const forEach = fn => array => array.map(fn);

const where = predicate => array => array.filter(predicate);
//let isDemocrat = candidate => candidate.party === 'D' // a boolean function for the where predicate.
//take(candidates).and(where(isDemocrat))(forEach(get('name'))).value

const fold = combine2 => initial => array => {
  return array.reduce((a, b) => combine2(a)(b), initial)
}//wraps reduce

const count = array => array.length;
const add = a => b => a + b
const sum = fold(add)(0)
//sum([1,2,3,4]) // 10

const multiply = a => b => a * b
const product = fold(multiply)(1)
//product([1,2,3,4]) // 24

const both = p => q => p && q
const all = fold(both)(true)
//all([true, true, true]) // true
//all([true, false, true]) // false

const either = p => q => p || q
const any = fold(either)(false)
//any([false, true, false]) // true
//any([false, false, false]) // false

const conc = s1 => s2 => s1 + s2
const join = fold(conc)('')

const intersperse = delimiter => ([first, ...rest]) =>
    rest.length
        ? [first, delimiter, ...intersperse(delimiter)(rest)]
        : [first];


const average1 = arr => {
  if(arr.length) {
    return sum(arr) / count(arr);
  }
  return arr.length;
}
const average2 = arr => {
  return sum(arr) / (arr.length || 1);
}

const divide = a => b => a / b;

const average3 = arr => arr.length ? divide(sum(arr))(count(arr)) : 1;

const average4 = arr =>   arr.reduce( (a, x) => a + x,   0)   /   arr.length;



const lift = f => g => h => x => f(g(x))(h(x));
const average = lift(divide)(sum)(count);

const window = (_number, index, array) => {
  const start = Math.max(0, index - 3);
  const end   = Math.min(array.length, index + 3);
  return array.slice(start, end);
}

const make_window = (before, after) => {
  return function (_number, index, array) {
    const start = Math.max(0, index - before);
    const end   = Math.min(array.length, index + after + 1);
    return array.slice(start, end);
  };
};

/* challenge, do without lodash
const runningAverage = (before, after, numbers) {
  return _.chain(numbers)
          .map(make_window(before, after))
          .map(average)
          .value();
}
*/

/*
let str = fold(add)('') // joins together an array of strings
let expandIt = intersperse(' ')

take('hello satoshi').and(expandIt)(str).value // 'h e l l o   s a t o s h i'
*/

// select({a:'hi',b:'john',c:'barney'},['a','b']) -> ['hi,'john']
const select = array => obj => array.map(key => obj[key]);

const trace = label => value => {
  console.log(`${ label }: ${ value }`);
  return value;
};
        
module.exports = {
  add,
  all,
  any,
  average,
  average2,
  compose,
  composeSpread,
  count,
  flip,
  fold,
  forEach,
  get,
  join,
  multiply,
  product,
  select,
  sum,
  take,
  trace,
  where
}

//https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983

/*
const filter  = p => a => a.filter(p);
const map     = f => a => a.map(f);
const prop    = k => x => x[k];
const reduce  = r => i => a => a.reduce(r, i);
const compose = (...fns) => (arg) => fns.reduceRight((arg, fn) => fn(arg), arg);

// Lift for functions.
// See: https://jrsinclair.com/articles/2019/compose-js-functions-multiple-parameters/
const lift = f => g => h => x => f(g(x))(h(x));

*/