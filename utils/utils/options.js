https://medium.com/@tiborbotos/functional-javascript-null-undefined-and-the-optional-pattern-377662dd73d4

/*
var schema = {
  name: function (value) {
    return /^([A-Z][a-z\-]* )+[A-Z][a-z\-]*( \w+\.?)?$/.test(value);
  },
  age: function (value) {
    return !isNaN(value) && parseInt(value) == value && value >= 18;
  },
  phone: function (value) {
    return /^(\+?\d{1,2}-)?\d{3}-\d{3}-\d{4}$/.test(value);
  }
};

var info = {
  name: "John Doe",
  age: "",
  phone: "123-456-7890"
};

function validate(object, schema) {
  var errors = Object.keys(schema).filter(function (key) {
    return !schema[key](object[key]);
  }).map(function (key) {
    return new Error(key + " is invalid.");
  });

  if (errors.length > 0) {
    errors.forEach(function (error) {
      console.log(error.message);
    });
  } else {
    console.log("info is valid");
  }
}

validate(info, schema);
*/

const arr = [];
const str = '';
const num = 0;
const bool = false;
const obj = {};
const func = () => ({});

const safeObj = (value) => {
  
  if(value === undefined || value === null) {
    return {};
  } 
  if(typeof value ==='object'){
    return value;
  }

}

/*
1. always initialize. 
2. always handle null from outside.
3. always use parameter objects

interface HouseOptions {
    door?: Door;
    roof?: Roof;
    windows?: Windows;
}

class House() {
    constructor(options: HouseOptions) {...}
}

options pattern

1. no nulls. 
  utility: check for nulls.
2. let always with default.

2. constants, (avoid let)
3. avoid if 

Safe types:

Data comes from database or forms. (from user to db or db to user).
databases give us null and undefined.

The list of errors:

no propert
undefined
cannot call undefined.

all functions should return a value (Option).
all optional parameters default to None (not undefined)
all array indexes have options.

universal value type always toStrings.





var Option = function(value) {
  this.value = value;
};
var None = new Option();
var Some = function(value) {
  if (typeof value !== undefined) {
    return new Option(value);
  }
  return None;
};
Option.prototype.map = function(fn) {
  if (this.value !== undefined) {
    return new Some(fn(this.value));
  }
  return None;
}
Option.prototype.getOrElse = function(value) {
  if (this.value !== undefined) {
    return this.value;
  }
  return value;
}

var person = {
  title: None,
  firstname: Some('Joe'),
  middlename: None,
  lastname: Some('Pizza')
};

function formatName(person) {
  var addSpace = function(inp) {
    return inp + ' ';
  };
  return person.title.map(addSpace).getOrElse('') +
    person.firstname.map(addSpace).getOrElse('') +
    person.middlename.map(addSpace).getOrElse('') +
    person.lastname.map(addSpace).getOrElse('');
}

*/
