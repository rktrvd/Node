// When we call any function like add(5,5) then 5 is know as arguments.
// whereas when we create any funtion like add(a,b), then a,b is know as parameters.

const add = (a,b) => {
    return a+b;
}

const sub = (a,b) => {
    return a-b;
}

const mult = (a,b) => {
    return a*b;
}

const name = "ravikant";
// to use any object of this module to another module, we require to export the same.
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mult = mult;

module.exports = {add, sub, mult, name};