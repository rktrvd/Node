const http = require("http");

const server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url == "/"){
        res.end("Hello from the home side");
    } else if(req.url == "/contact"){
        res.end("Hello from the contact side");
    }else if(req.url == "/about"){
        res.write("Hello from the about side")
        res.end();
    }else{
        res.writeHead(404,{"content-type": "text/html"});
        res.end("<h1> Page does not exist </h1>");
    }
});

server.listen(8000, "127.0.0.1",()=>{
    console.log("listening to the port no 8000")
});