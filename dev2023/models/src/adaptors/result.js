const _ = require('lodash');

const BLANK = '--';
const STD_MSG = 'Operation failed.'; // safety, you shouldn't rely on this though.
const FAIL = 'FAIL';
const SUCCESS = 'SUCCESS';

const result = {};

result.succeed = (value) => {
  return Object.freeze({
    result: SUCCESS,
    message: 'Successful.',
    value
  });
};

result.fail = (message = STD_MSG, input) => {
  let value = BLANK;
  if (input) {
    value = _.cloneDeep(input);
  }
  return Object.freeze({
    result: FAIL,
    message,
    value
  });
}

module.exports = result;
