'use strict';

const NB_SPACE = '\u00a0';
const ZW_SPACE = '\u200b'; 
const SOFT_HYPHEN = '\u00ad';
const INTERPUCT = '\u00b7';
const WORD_JOINER = '\u2060';
const ZW_JOINER = '\u200d';
const CURLY_LSQ = '';
const CURLY_RSQ = '';
const CURLY_LDQ = '';
const CURLY_RDQ = '';
const SQ = "'";
const DQ = '"';
const SP = ' ';

//ditto, left tick, tab, line feed, line tab, form feed. control characters

const cleanSpaces = (str) => {
  let clean = str.replace(NB_SPACE, SP);
  clean = clean.replace(ZW_SPACE, SP);
  return clean;
};

const isAlphaNumeric = (item) => {
  return item ? /^[a-zA-Z0-9]+$/.test(item) : false;
};

const isEmail = (item) => {
  return item ? /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/.test(item) : false;
};

module.exports = {
  isAlphaNumeric,
  isEmail
};

/*

foreign character translation (replace non standard charsets with ?)
simple ones for european analogs
password strength

outsource
charsets (see ravnier)

credit card
country code
currency codes

protocols, urls, uri
ip vX addresses, 

date and time      use a util here
markups (html/xml/saml/html5 etc) use utilities here.
*/