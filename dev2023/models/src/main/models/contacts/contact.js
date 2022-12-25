const constants = require('../../constants');
const safe = require('./safe');

const {NULLID, ROOT, NA, ND} = constants;


const contactTemplate = {
  id: NULLID,
  status: ROOT,
  name: {
    firstName: NA,
    middleName: NA,
    familySurname: NA,   // aka maiden name
    surname: NA,         // family or taken name
    suffix: NA           // jr. convention
  },
  address: {
    country: NA,
    state: NA,
    city: NA,
    lines: [NA, NA]
  },
  birthdate: ND,
  email: NA,
  phone: NA
};

const update = (contactObj) => {
  //TBD use email isValid 
  safe.assign(contactTemplate, contactObj);
}

const contact = {
  template: safe.deepFreeze(contactTemplate),
  newContact: safe.clone(contactTemplate),
  update,
  fromJson: jsonString => safe.assign(contactTemplate, JSON.parse(jsonString))
};

module.exports = contact;

