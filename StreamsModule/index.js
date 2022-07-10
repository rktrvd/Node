const fs = require("fs");
const http  = require("http");
const server = http.createServer();

server.on("request",(req,res)=>{
    //  Way to read the data in one go
    // fs.readFile("input.txt","utf-8",(err,data)=>{
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // });

    //  Way to read the data via streaming
    const rstream = fs.createReadStream("input.txt");
    rstream.on("data",(chunk)=>{
        res.write(chunk);
    });
    rstream.on("end",()=>{
        res.end();
    });
    rstream.on("error",(err)=>{
        console.log("File not found"+err);
        res.end(err.message);
    })
});

server.listen(8000,"127.0.0.1");
console.log("Listening to port 8000")