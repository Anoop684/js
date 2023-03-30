const events = require("events");

let emitterEvents = new events.EventEmitter();

emitterEvents.on('hi',()=>{
 console.log('hello .....');
});

emitterEvents.emit('hi');