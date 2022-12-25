
const models = require('models');


function contacts () {
  const {contactList} = models;
  if(!contactList || !contactList.length) {
    console.log('coming soon');
    return;
  }
  contactList.forEach((model) => {
    console.dir(model);
  })
}

module.exports = contacts;