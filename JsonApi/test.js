const fs = require("fs");
const { json } = require("stream/consumers");

const biodata = {
    name: "Ravi",
    age: 26,
    Add: "Buxar"
};

const JsonData = JSON.stringify(biodata);

fs.writeFile("json1.json",JsonData,(err)=>{
    console.log('File write done');
});

fs.readFile("json1.json","utf-8",(err, data)=>{
    console.log("File read successful");
    const orgData = JSON.parse(data);
    console.log(orgData);
});