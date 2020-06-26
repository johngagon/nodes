
//Math.floor(4.9) === 4  //true
~~4.9 === 4  //true


const num1 = +"100"; // converts to int data type
const num2 =  +"100.01"; // converts to float data type


/*
if(arr.indexOf(item) > -1) { // Confirm item IS found
}
if(arr.indexOf(item) === -1) { // Confirm item IS NOT found
}
*/

if(~arr.indexOf(item)) { // Confirm item IS found
}

if(!~arr.indexOf(item)) { // Confirm item IS NOT found
}


function leftZeroPad(value, maxlength) {
  while (value.length < maxlength) {
    value = '0' + value;
  }
  return value;
}

function boundedValue(minvalue, maxvalue) {
  return function(value) {
    return Math.max(minvalue, Math.min(maxvalue, +value || 0));
  }
}

function colorValue(value) {
  var hex = boundedValue(0, 255)(value).toString(16);
  return leftZeroPad(hex, 2);
}

function rgbToHex(red, green, blue) {
  red = colorValue(red);
  green = colorValue(green);
  blue = colorValue(blue);
  
  return '#' + red + green + blue;
}

//profiling. you can mix functions using FP function combiners. same with logging. works like AOP
const addTiming = (fn, getTime = getCurrentTime, logFnTime = logTime) => (
  ...args
) => {
  const startTime = getCurrentTime();
  try {
    const valueToReturn = fn(...args);
    logFnTime("Normal execution", fn.name, startTime, getTime());
    return valueToReturn;
  } catch (err) {
    logFnTime("Error thrown", fn.name, startTime, getTime());
  }
};

//memoizing - lodash _.memoize(fib)
//piping is the opposite of composing.  
//currying is making a function do one param at a time. partials execute them partially at a time.
//