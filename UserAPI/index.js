const fs = require("fs");
const http = require("http");
const { json } = require("stream/consumers");

const server = http.createServer((req, res)=>{
    
    const data  = fs.readFileSync(`${__dirname}/userapi.json`,"utf-8");
        const objData = JSON.parse(data);
        // console.log(objData);
        
    console.log(req.url);
    if(req.url == "/"){
        res.end("Hello from the home side");
    } else if(req.url == "/userapi"){
        // fs.readFileSync(`${__dirname}/userapi.json`,"utf-8",(err, data)=>{
        //     // console.log(data);
        //     const objData = JSON.parse(data);
        //     console.log(objData[0].id);
        //     res.end(objData[0].email);
        // });
        res.writeHead(200,{"content-type": "application/json"});
        res.write("Hello from the userAPI side");
        res.end(objData[0].email);
    }else{
        res.writeHead(404,{"content-type": "text/html"});
        res.end("<h1> Page does not exist </h1>");
    }
});

server.listen(8000, "127.0.0.1",()=>{
    console.log("listening to the port no 8000");
});