'use strict';

//1,2,3
//2,3,4
//those that are in either sets, 1,2,3,4
const union = (firstArr, secondArr) => {
  const firstSet = new Set(firstArr);
  const secondSet = new Set(secondArr);
  const resultSet = new Set([...firstSet, ...secondSet]);
  return Array.from(resultSet);
};

//1,2,3
//2,3,4
//those that are found in both sets, 2,3 based on Set.has
const intersection = (firstArr, secondArr) => {
  const firstSet = new Set(firstArr);
  const secondSet = new Set(secondArr);
  const resultSet = new Set([...firstSet].filter(x => secondSet.has(x)));
  return Array.from(resultSet);
};

//1,2,3
//3,4,5
//those of first that are not in the second. 1,2 based on Set.has
const minus = (firstArr, secondArr) => {
  const firstSet = new Set(firstArr);
  const secondSet = new Set(secondArr);
  const resultSet = new Set([...firstSet].filter(x => !secondSet.has(x)));
  return Array.from(resultSet);
};

const unique = (arr) => {
  const uniqueArray = [...new Set(arr)];
  return uniqueArray;
}

module.exports = {
  intersection,
  minus,
  union,
  unique
};