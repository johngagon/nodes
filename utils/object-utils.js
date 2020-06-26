const _ = require('lodash');

/*
deep freeze
deep clone
builder

diff
diffStructure only
shallowdiff
hasFunctions / get all functions
various sorts (asc/desc)
json to and from (print json as object)

"classes"/interfaces - verbs classes can do. "fact modeling", "hypothetical fact modeling (wish to, capable of)"

merge together (sort)

Sets of objects
intersection union diff

array of objects
uniqueValues for value of key in list of objects
types of splicing arrays

object filtering
object grouping/aggregation (types of reduce)
types of splicing arrays


*/
const builder = () => {
  /*
   * Object from entries
   * obj.val =
   * validator?
   */
}
const diff = (obj1, obj2) => {
  const deepDiff = (a, b, r, reversible) => {
      _.each(a, function(v, k) {
        if (r.hasOwnProperty(k) || b[k] === v) return;
        r[k] = _.isObject(v) ? _.diff(v, b[k], reversible) : v;
      });
  };
  _.mixin({
    diff: function(a, b, reversible) {
      var r = {};
      deepDiff(a, b, r, reversible);
      if(reversible) deepDiff(b, a, r, reversible);
      return r;
    }
  });
  return [_.diff(obj1, obj2), _.diff(obj2, obj1)];
};

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
  deepClone,
  diff
};