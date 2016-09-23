var events = require('events');

var progressBar = new events.EventEmitter();


progressBar.on('start', function(number){
	console.log(number);
});

progressBar.on('progress', function(one, two){
	var x = one;

})
// Can you pass a callback function in as an argument? 
// And how do you call that callback function?
progressBar.on('event', function(a, b){
	console.log(a, b);
});

progressBar.emit('event', 'a', 'b');













