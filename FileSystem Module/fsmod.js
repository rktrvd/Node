// Working with Synchronus file system
//Adding a file system module.
// const fs = require("fs");

// fs.mkdirSync("Ravi");

// fs.writeFileSync("Ravi/read.txt","welcome to my program");

//fs.writeFileSync("Ravi/read.txt","Ravikant , welcome to my program");

//fs.appendFileSync("Ravi/read.txt","How are you !!");

// fs.appendFileSync("Ravi/read.txt","Add this txt");

// const buf_data = fs.readFileSync("Ravi/read.txt");

// console.log(buf_data.toString());

// Reading the file without getting buffer data.
// const buf_data = fs.readFileSync("Ravi/read.txt",'utf8');
// console.log(buf_data);

// fs.renameSync("Ravi/read.txt","readwrite.txt");

// Delete file and folder
// fs.unlinkSync("Ravi/read.txt");
// fs.rmdirSync("Ravi");




// Working with ASynchronus file system

// const fs = require("fs");

// fs.mkdir("Ravi",(err)=>{
//     console.log("Folder is created");
// });

// fs.writeFile("Ravi/test.txt","today is a awsome day",
// (err)=>{
// console.log("file is created");
// console.log(err);
// });

// fs.appendFile("Ravi/test.txt","Add to the last",(err)=>{
//     console.log("Data is added");
// });

// fs.writeFile("test.txt","Have an awsome day",
// (err)=>{
//     console.log("Task Completed");
//     console.log(err);
// });


// fs.readFile("Ravi/test.txt","utf8",(err,data)=>{
//     console.log(data);
// });

// fs.rename("Ravi/Test.txt","Ravi/Example.txt",(err)=>{
//     console.log("Rename is done");
// });

// fs.unlink("Ravi/Example.txt",(err)=>{
//     console.log("File is deleted");
// });

// fs.rmdir("Ravi",(err)=>{
//     console.log("folder is deleted");
// });