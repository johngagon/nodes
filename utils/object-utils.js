

/*
deep freeze
deep clone

*/

const deepFreeze = (object) => {
  let propNames = Object.getOwnPropertyNames(object);
  for (let name of propNames) {
     let value = object[name];
     object[name] = value && typeof value === "object" ?  
                          deepFreeze(value) : value;
  }
  return Object.freeze(object);
};

const deepClone = (objectToClone) => {
  const cloned = JSON.parse(JSON.stringify(objectToClone));
  return cloned;
};
//use lodash deepclone for symbols and functions



module.exports = {
  deepFreeze,
  deepClone
};