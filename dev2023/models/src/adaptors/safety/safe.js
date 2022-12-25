const _ = require('lodash');
const cleanDeep = require('clean-deep');


// clone onto structure an object you want to assign or standardize properties on given property structure.
const assign = (structure, obj) => {
  const cleanClone = cleanDeep(obj);      //clones and prevents nulls and forgotten props.
  return _.merge(structure, cleanClone);
}

const deepEqual = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

const get = (object, path, defaultVal) => {
  const value = _.get(object, path, defaultVal);

  return _.isNull(value) && !_.isNil(defaultVal) ? defaultVal: value;
}

const freeze = (obj) => {
  Object
   .entries(object)
   .forEach(([name, value]) => {
     if (value && typeof value === 'object') {
       deepFreeze(value);
     }
   });
   return Object.freeze(object);
};


const safe = {
  assign,
  clean: cleanDeep,
  clone: _.cloneDeep,
  deepEqual,
  freeze,
  get,
  has: _.has,
  isEmpty: _.isEmpty,
  set: _.set
};

module.exports = safe;

/*
TBD: matches object (paths match)
*/

