// const opr = require("./operator")

// console.log(opr.add(5,5));
// console.log(opr.sub(5,5));

//TO use the property directly to the module
const {add, sub, mult, name} = require("./operator")

console.log(add(5,5));
console.log(sub(5,5));
console.log(mult(5,5));
console.log(name);