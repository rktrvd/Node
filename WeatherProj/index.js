const http = require("http");
const fs = require("fs");
var requests = require("requests");

const homefile = fs.readFileSync("home.html","utf-8");
const replaceVal = (tempVal, orgVal)=>{
    let temprature = tempVal.replace("{%tempval%}",orgVal.main.temp);
    temprature = temprature.replace("{%tempmin%}",orgVal.main.temp_min);
    temprature = temprature.replace("{%tempmax%}",orgVal.main.temp_max);
    temprature = temprature.replace("{%city%}",orgVal.name);
    temprature = temprature.replace("{%country%}",orgVal.sys.country);
    temprature = temprature.replace("{%tempstatus%}",orgVal.weather[0].main);
    return temprature;
}

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
      requests('https://api.openweathermap.org/data/2.5/weather?q=buxar&units=metric&appid=f3c42f78fb643fa84d48f27b3d31a166')
        .on('data', (chunk) => {
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
            // console.log(arrData[0].main.temp);
            const realTimeData = arrData.map((val)=>
                replaceVal(homefile,val)).join("");
            // console.log(realTimeData);
            res.write(realTimeData);
        })
        .on('end', (err) => {
            if (err) return console.log('connection closed due to errors', err);
            res.end();
        });
    }
});

server.listen(8000,"127.0.0.1");