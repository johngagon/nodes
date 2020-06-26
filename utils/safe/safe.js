'use strict';

/*
const UNDEFINED = 'undefined';
const BIGINT = 'bigint';
const SYMBOL = 'symbol';
const BOOLEAN = 'boolean';
const NUMBER = 'number';
const STRING = 'string';
const DEFAULT_FUNCTION = () => ({});
*/


const OBJECT = 'object';
const FUNCTION = 'function';
const ARRAY = 'array';

const DEFAULT_ARRAY = [];
const DEFAULT_STRING = '';
const DEFAULT_OBJECT = {};


const safe = {

  messages: {
    NOT_FOUND: 'Not Found',
    NOT_ARRAY: 'Not Array',
    DIDNT_WORK: 'Did not work',
    REQUIRES_FUN: 'Requires a function',
    RETURN_VAL: 'Return value'
  },

  getArray: value => {
    if(safe.isNil(value)){
      return DEFAULT_ARRAY;
    }
    if(typeof value === ARRAY){
      return value;
    }
    if(typeof value === OBJECT){
      return value.entries();
    }
    return [value];
  },

  getString: value => {
    if(safe.isNil(value)){
      return DEFAULT_STRING;
    }
    return ''+value;
  },

  getBoolean: value => {
    return !!value;
  },

  getObject: value => {
    return Object(value);
  },

  getNumber: value => {
    return ~~value;
  },

  defaultObject: value => {
    if(safe.isNil(value)) {
      return DEFAULT_OBJECT;
    }
    return value;
  },

  defaultValue: value => {
    if(safe.isNil(value)) {
      return DEFAULT_STRING;
    }
    return value;
  },

  defaultCollection: value => {
    if(safe.isNil(value)) {
      return DEFAULT_ARRAY;
    }
    return value;
  },


  getFunction: value => {
    if(safe.isNil(value)) {
      return () => DEFAULT_OBJECT;
    }
    if(typeof value===FUNCTION) { //may not work
      return value;
    }
    return () => value;
  },

  isArray: arr => {
    return arr instanceof Array;
  },

  isNil: val => {
    return val === undefined || val === null;
  },

  msg: (callName='', message='', arg='', problem='') => {
    return `${callName}: ${message}: ${arg}: ${problem}`
  },

  find: (arr, ...otherArgs) => {
    const DESC = 'safe.find';
    const {
      DIDNT_WORK, 
      NOT_FOUND, 
      NOT_ARRAY, 
      REQUIRES_FUN,
      RETURN_VAL} = safe.messages;
    const {msg, isArray} = safe;

    if(!isArray(arr)){
      return msg(DESC, DIDNT_WORK, 1, NOT_ARRAY);
    }
    if(!otherArgs.length || !otherArgs[0] || !otherArgs[0] instanceof Function){
      return msg(DESC, DIDNT_WORK, 2, REQUIRES_FUN);
    }
    const result = arr.find(...otherArgs);
    if(safe.isNil(result)) {
      return msg(DESC, DIDNT_WORK, RETURN_VAL, NOT_FOUND);
    }
    return result;
  },

  //creates an object for each type given and provides condtional functions on those objects
  union: types => types.reduce((prev, type) => ({
      ...prev,
      [type]: data => ({
          match: fns => fns[type](data),
      }),
    }), {}
  )
  /* example> types can be object states, error states a variety of states.
const Ponies = union([
    'EarthPony',
    'Pegasus',
    'Unicorn',
])

const twilight = Ponies.Unicorn({
    name: 'Twilight Sparkle',
    spell: 'Levitation',
})
const rainbow = Ponies.Pegasus({
    name: 'Rainbow Dash',
    speed: 20,
})

twilight.match({
    EarthPony: ({ name }) => `${name} is a peaceful earth pony.`,
    Pegasus: ({ name, speed }) => `${name} flies at a speed of ${speed}!`,
    Unicorn: ({ name, spell }) => `${name} uses ${spell}!`,
}) // -> 'Twilight Sparkle uses Levitation!'
  */



  /*
  1. never use uninitialized. (let var)
  2. always && possible undefineds.
  3. always safe navigate and feel free to use with #2 above.
  4. list of javascript functions that can return undefined and be sure to util wrap them or overwrite them.
        these are almost always finding functions.


String.match
Array.find

Accessing wrong property. 
Accessing something at wrong array index.
Always make your functions return a value, preferrably a result.

Result 

Make a list of values you definitely do not want. NaN etc.
Model some "functions" that return either a boolean, a function or data.
   */
};

module.exports = {
  safe
};

/*
Array

.find()  can return undefined if nothing found. (also returns undefined if the find searches for undefined).

safeFind(arr, ){
  if(arr.find()
}

*/