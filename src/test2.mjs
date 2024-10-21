import nameee from './test1.mjs'

import {b,c,d} from './test1.mjs'
// import {b1} from './test1.mjs'  //It will not work, same variable which is exported should be imported here in the case of non-default exports.

console.log(nameee); // as 'a' is default exported so any variable can be used

console.log(b);  //same variable names which are exported should be used here for non-defaults
// console.log(b1);
console.log(c);
console.log(d);



// To run thsi file: node .\src\test2.mjs