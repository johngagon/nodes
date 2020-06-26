
//const out = greets.map(key => (select(['a','b'])(key)));
//[['hi','john'],['greetings','ray']]
/*
let input = [3,4,3,4];
let out = average(input);
console.log(out);

input = [1, 2, 3, 3, 4, 8, 9, 13, 14, 14, 25, 'a', 'a', 'z'];
out = [1, 2, 3, 4, 8, 9, 13, 14, 25, 'a'];
console.log(unique(input));

const testFunc = () => ({});
console.log([testFunc]);
*/
/*
//                        actual   expect
console.log(!!undefined); //false  false
console.log(!!null);      //false  false
console.log(!!true);      //true   true
console.log(!!NaN);       //false  false
console.log(!!'');        //false  false
console.log('');
console.log(!!(0**0));    //true   true
console.log(!!-1);        //true   true
console.log(!!0);         //false  false
console.log(!!1);         //true   true
console.log(!!(1/0));     //true   true
console.log('');
console.log(!!(1-(1/0))); //true   true
console.log(!![]);        //true   true
console.log(!!{});        //true   true
console.log(!!(()=>({})));//true   true
console.log('');
console.log('');
//                        actual   expect
console.log(''+undefined); 
console.log(''+null);      
console.log(''+true);      
console.log(''+NaN);       
console.log(''+'');        
console.log('');
console.log(''+(0**0));    
console.log(''+-1);        
console.log(''+0);         
console.log(''+1);         
console.log(''+(1/0));     
console.log('');
console.log(''+(1-(1/0))); 
console.log(''+[]);              //array        
console.log(''+{});        
console.log(''+(()=>({})));

console.log([].toString());

console.log(Object(undefined));
console.log(Object(null));
console.log(Object([]));
console.log(new Object(undefined));
console.log(new Object(null));
console.log(Object({a:1, b:'2', c:'c', 'd':4, e: undefined, f:null}));
const value = 1;
const getFunction = (v) => {
  const fun = () => v;
  return fun;
}
console.log(getFunction(value)());

*/
// The following are equivalent
