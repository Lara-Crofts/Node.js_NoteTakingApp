//PRACTICE DEMONSTRATION ...


// console.log('utils.js')


// const name = 'Rose'

// fails after running and giver ** ReferenceError: name is not defined, 
// bc cannot export console.log(name) from app.js file to utils.js file even
// tho we used require('./utils.js') in app.js, bc each MODULE has its own SCOPE. 
// 'Rose' is defined in utils.js module. 

// THUS need to define all the things this file `utils.js` should share with other files
// define variables vvv
// thus.. aquired the `require('./utils.js') which means the return value is what was 
// assigned the string 'Rose', which is stored on the NAME variable. 


/// ----------------------------------------------
// define functions ... how to share functions and export function to app.js file 

// const add = function(a,b) {
//     return a + b
// }

// module.exports = add
// -------------------------------------------


// module.exports = name 

// 1. after creating module.exports = name, that grabs name from app.js
// 2. go back to app js to then update require('./utils.js') to const name = require('./utils.js')
// 3. run terminal node apps.js ... // output ---> utils.js and Rose 


/// ------------------------------------------
