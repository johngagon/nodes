
const { safe } = require('../../../adaptors');
const contact = require('./contact');

const deps = require('../../deps');

const {constants, contactData} = deps;
const {COMPLETE, INCOMPLETE, NA} = constants;

const {
  countries,
  states,
  cities,
  addresses,
  addressLines,
  addressContacts,
  contacts,
  names
} = contactData;

const usableStatuses = [COMPLETE, INCOMPLETE];
const usable = (status) => usableStatuses.includes(status);
const lSort = (a1,a2) =>(a1.line < a2.line) ? 1 : (a1.line > a2.line) ? -1 : 0;

const addressList = addresses
  .filter(entry => usable(entry.status))
  .map(entry => {
    const {id, city_id} = entry;
    const lines = addressLines
      .filter(e => e.address_id ===id)
      .sort(lSort)
      .map(e=>e.linedata);
    const {city = NA, state_id} = cities.find(e => e.id === city_id);
    const {state = NA, country_id} = states.find(e => e.id === state_id);
    const {country = NA} = countries.find(e => e.id === country_id);
    return {
      id,
      lines,
      city,
      state,
      country
    }
  }
);



const contactList = contacts
  .filter(entry => usable(entry.status))
  .map(entry => {

    const {id: entryId} = entry;
    const findName = names.find(e => e.contact_id === entryId);
    const {id: nameId, status, contact_id,
      ...name 
    } = findName;

    const {address_id} = addressContacts.find(e => e.contact_id === entryId);
    const findAddress = addressList.find(e => e.id === address_id);
    const {id: addressId, 
      ...address
    } = findAddress;

    const draft = {
      ...entry,
      name,
      address
    };

    const rv = contact.update(draft); // NEED: a way to clean source but copy only matching props to dest

    return rv;
});



module.exports = contactList;
