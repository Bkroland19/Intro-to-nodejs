// function sayHello(name) {
// 	console.log("hello " + name);
// }

// sayHello("Roland");

// console.log(module );

const EventEmitter = require("events");
const emitter = new EventEmitter();

//Register a listener

emitter.on("messageLogged", function (arg) {
	console.log("Listener called", arg);
});

//Raise an event
emitter.emit("messageLogged", { id: 1, url: "https;//" });
