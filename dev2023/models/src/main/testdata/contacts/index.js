
const countries = require('./countryData.json');
const states = require('./stateData.json');
const cities = require('./cityData.json')
const addresses = require('./addressData');
const addressLines = require('./addressLineData.json');
const addressContacts = require('./contactAddressData.json');

const contacts = require('./contactData.json');
const names = require('./nameData.json');

const contactData = {
  countries,
  states,
  cities,
  addresses,
  addressLines,
  addressContacts,
  contacts,
  names
};

module.exports = contactData;