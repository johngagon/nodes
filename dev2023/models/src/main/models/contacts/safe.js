const _ = require('lodash');
const cleanDeep = require('clean-deep');


const assign = (structure, obj) => {
  const cleanClone = cleanDeep(obj);     
  return {...structure, ...cleanClone};
}

const deepEqual = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

const get = (object, path, defaultVal) => {
  const value = _.get(object, path, defaultVal);

  return _.isNull(value) && !_.isNil(defaultVal) ? defaultVal: value;
}

const deepFreeze = (obj1) => {
  Object.keys(obj1).forEach((property) => {
    if (
      typeof obj1[property] === "object" &&
      !Object.isFrozen(obj1[property])
    )
      deepFreeze(obj1[property]);
  });
  return Object.freeze(obj1);
};


const safe = {
  assign,
  clean: cleanDeep,
  clone: _.cloneDeep,
  deepEqual,
  deepFreeze,
  get,
  has: _.has,
  isEmpty: _.isEmpty,
  pick: _.pick,
  set: _.set
};

module.exports = safe;
