'use strict'; 

const clone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
}

const currency = {
  USD: 'USD'
}
const buyer_money = {
  amount: 200, //100 dollars
  //fraction: 0, //cents
  unit: currency.USD
  
}
const car_price = {
  amount: 100, //100 dollars
  //fraction: 0, //cents
  unit: currency.USD
}
const seller_money = {
  amount: 10, //dollars
  //fraction: 0, //cents
  unit: currency.USD
}

const car = {
  name: 'car',
  price: car_price
}

const buyer = {
  funds: buyer_money,
  goods: []
  //wants to buy, is ready to buy
}
const seller = {
  goods: [car], // assuming 1 qty at a time, assuming listing/wants to sell
  funds: seller_money
  //wants to sell, is ready to sell
}

const adjustMoney = (money, amount) => { //, fraction) => { //do a version with money param
  //assumes parameters amount and fraction are in right unit.
  const money_clone = money;//clone
  money_clone.amount += amount;
  return money_clone;
}
const hasMoney = (person, amount) => { // assume unit and no fraction
  return person.funds.amount >= amount;
}
/*
const selling = {
  categories: ['exchange','human activity']
}
*/

const sell = (seller, buyer, good, price) => {
  const good = seller.goods.find(item => item.name === good);
  const buyerHasFunds = hasMoney(buyer, price);
  const seller_clone = clone(seller);
  const buyer_clone = clone(buyer);
  if(good && buyerHasFunds) {
    buyer_clone.goods.push(good);
    seller_clone.goods = seller.filter(item => item.name !== good);
    seller_clone.funds = adjustMoney(buyer.funds, price);
    buyer_clone.funds = adjustMoney(buyer.funds, 0-price);
    //unset wants to, read to sell and buy specific
    return {buyer: buyer_clone, seller: seller_clone, good, price};
  }
  return {seller, buyer, good, price};
  /* 
  clone. (buy is inverse).
  checks: seller, buyer, goods, price, goods is string, 
  seller and buyer have goods and funds
  seller has goods with name 'car'
  buyer has money with price

  assumed: buyer agrees, all are specific


  missing info conditions: (record with incomplete data) - each subject's pov
    if(no variables) -> we assume thinking of selling.
    Intentional:
    if(seller only) -> seller (identified as, specific), want to sell something
    if(goods) -> (identified as, specific), wants to sell these goods
    if(price) -> (selling at price).
    if(buyer) -> (identifying as, specific).
    
    Act of:
    all args are defined and specific,    (questions)
    passed to event (time and location).

    Learn of: (as is). (incomplete past event.)
    

    seller lists goods and owns goods
    buyer can hold goods
    buyer has funds

  find the goods on the seller
  find the money on the buyer
  */
};

const doSell = () => {
  const result = sell(buyer, seller, 'car', car_price);
  return result;
  /*
  expect exchange
  expect no change in buyer and seller
  */
}

 
module.exports = {
 doSell,
 sell
}
