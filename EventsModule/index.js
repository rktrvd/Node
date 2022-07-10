// const event = require("events");
// const events = event.EventEmitter();
const EventEmitter = require("events");
const event = new EventEmitter();

// event.on("SayMyName",()=>{
//     console.log("My name is RaviKant");
// });

// event.on("SayMyName",()=>{
//     console.log("My name is Trivedi");
// });

// event.emit("SayMyName");

event.on("CheckPage",(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
})

event.emit("CheckPage",200,"ok");