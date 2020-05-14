console.log('hi');

const {average, select} = require('./function-utils');
const {query} = require('./query');
const {isAlphaNumeric} = require('./regex-utils');

const greets = [{a:'hi',b:'john',c:'gagon'}, {a:'greetings',b:'ray', c:'lavalley'}];

//const out = greets.map(key => (select(['a','b'])(key)));
//[['hi','john'],['greetings','ray']]

const input = [3,4,3,4];
const out = average(input);
console.log(out);

