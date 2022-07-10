const biodata = {
    name: "Ravi",
    age: 26,
    Add: "Buxar"
};

console.log(biodata.name);

// We use stringify when we need to convert the object into json file
const JsonData = JSON.stringify(biodata);
console.log(JsonData);

// We use parse when we need to convert the JSON to object
const objData = JSON.parse(JsonData);
console.log(objData);
console.log(objData.name);