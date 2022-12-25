

'use strict';

const result = require('./result');
const ensureEmail = require('./email/email');
const safe = require('./safety/safe');

const {
  addMoney,
  ensureMoney,
  subtractMoney
} = require('./money/money.js');

const adaptors = {
  safe,
  addMoney,
  ensureMoney,
  ensureEmail,
  result,
  subtractMoney
};

module.exports = adaptors;