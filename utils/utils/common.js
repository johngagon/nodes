
const common = {

  reqParam: () => {
    throw new Error('Missing parameter!');
  },

// universal validation function
  validate: (schema, values) => {
    for(field in schema) {
      if(schema[field].required) {
        if(!values[field]) {
          return false;
        }
      }
    }
    return true;
  }
  /*
const schema = {
  first: {
    required:true
  },
  last: {
    required:true
  }
}

console.log(validate(schema, {first:'Bruce'})); // false
console.log(validate(schema, {first:'Bruce',last:'Wayne'})); // true
  */

};

module.exports = {common};

