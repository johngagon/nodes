'use strict';

const propertyUpdated = (existingRecord, updatedRecord, property) => {
  return Boolean(updatedRecord) &&
  Boolean(existingRecord) &&
  updatedRecord[property] !== undefined &&
  updatedRecord[property] !== existingRecord[property];
};

const propertyUpdatedToValue = (existingRecord, updatedRecord, property, newValue) => {
  return Boolean(updatedRecord) &&
  Boolean(existingRecord) &&
  newValue !== undefined &&
  existingRecord[property] !== newValue &&
  updatedRecord[property] === newValue;
};

const propertyUpdatedFromValue = (existingRecord, updatedRecord, property, oldValue) => {
  return Boolean(updatedRecord) &&
  Boolean(existingRecord) &&
  existingRecord[property] === oldValue &&
  updatedRecord[property] !== undefined &&
  updatedRecord[propert] !== oldValue;
};

//returns filter function
const propertyMatches = (existingRecord, property) => updatedRecord => {
    return Boolean(updatedRecord) &&
    Boolean(existingRecord) &&
    property !== undefined &&
    updatedRecord[property] === existingRecord[property];
};

const validValues = (property, ...expectedValues) => obj => {
  return expectedValues.includes(obj[property]);
};

const invalidValues = (property, ...expectedValues) => obj => {
  if(!expectedValues.length) {
    return false;
  }

  return expectedValues.includes(obj[property]) === false;
};

module.exports = {
  validValues,
  invalidValues,
  propertyMatches,
  propertyUpdated,
  propertyUpdatedFromValue,
  propertyUpdateToValue
};
