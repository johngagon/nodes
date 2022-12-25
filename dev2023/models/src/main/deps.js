//across
const adaptors = require('../adaptors');
const constants = require('./constants');
//down
const contact = require('./models/contacts/contact');   
const contactData = require('./testdata/contacts');

//all deps together. 
const deps = {
  adaptors,
  constants,
  contact,
  contactData
};

module.exports = deps;