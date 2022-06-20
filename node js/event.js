// 6/20 ------------------------------> Monday ------------------
// ------------------------- <Event Module> ---------------------

// Built in module. but can customize it 

const EventEmitter = require('events');
// Since is is like class, so need to be acesses like constructor. 

const emitter = new EventEmitter();

// defining event
emitter.on('random', () => {
    console.log("Random even occured");
});

// trigering event
emitter.emit('random');