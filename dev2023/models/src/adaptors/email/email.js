const result = require('../result');

const validEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const ensureEmail = (value) => {
  if(!value || !validEmail(value)) {
    return result.fail('makeEmail value parameter invalid', value);
  }
  return result.succeed(value);
}

module.exports = ensureEmail;