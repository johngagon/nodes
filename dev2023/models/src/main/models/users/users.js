const deps = require('../../deps');

const {constants, contact} = deps;

const {NULLID, ROOT, NA} = constants;


const userTemplate = {
  id: NULLID,
  status: ROOT,
  handle: NA,
  password: NA,
  active: false,
  contact: contact.contactTemplate
};


module.exports = userTemplate;
