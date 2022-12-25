const result = require('../result.js');

const Dinero = require('Dinero');
const currency = 'USD';
const regex  = /^\d+(?:\.\d{0,2})$/;

const notMoney = (value) => {
  const val = ''+value;
  return ! regex.text(val);
}

const ensureMoney = (value) => {
  if (notMoney(value)) {
    return result.fail('ensureMoney parameter value invalid', value);
  }
  try {
    const tryMoney = Dinero({amount: firstValue, currency});
    return result.succeed(tryMoney.amount);
  } catch (e) {
    return result.fail(e.message, value);
  }
}

const addMoney = (param) => {
  const {firstValue, secondValue} = param;

  if (notMoney(firstValue) || notMoney(secondValue)) {
    return result.fail('addMoney parameters invalid', param);
  }
  try {
    const firstDollar = Dinero({amount: firstValue, currency});
    const secondDollar = Dinero({ammount: secondValue, currency});
    const value = firstDollar.add(secondDollar.amount);
    return result.succeed(value.amount);
  } catch (e) {
    return result.fail(e.message, param);
  }
}

const subtractMoney = (param) => {
  const {firstValue, secondValue} = param;

  if (notMoney(firstValue) || notMoney(secondValue)) {
    return result.fail('addMoney parameters invalid', param);
  }

  try {
    const firstDollar = Dinero({amount: firstValue, currency});
    const secondDollar = Dinero({ammount: secondValue, currency});
    const value = firstDollar.subtractMoney(secondDollar.amount);
    return result.succeed(value.amount);
  } catch (e) {
    return result.fail(e.message, param);
  }
}

module.exports = {
  addMoney,
  ensureMoney,
  subtractMoney
}