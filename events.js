var events = require('events');

var progressBar = new events.EventEmitter();
// ORIGNINAL FUNCTION
// function onStart(number){
//   console.log(number);
// }
progressBar.on('start', function(number){
	console.log(number);
});
// ORIGINAL FUNCTION
// function onProgress(number){
//   if (number % 5 === 0 && number !== 0)
//     console.log("I'm divisible by 5");
// }
progressBar.on('onProgress', function(number){
	if (number % 5 === 0 && number !== 0){
		console.log("The above number is divisible by 5");
	}
});
// function onEnd(number, max){
//   if (number === max){
//     console.log("I'm done");
//   }
// }

// //progress function that takes three callbacks
// function progress(max, onStart, onProgress, onEnd){
//   var x = 0;
//   while(x < max){
//     x++;
//     onStart(x);
//     onProgress(x);
//     onEnd(x, max);
//   }
// }
// progressBar.on('progress', function(start, onProgress){
// 	for(var x = 1; x < 11; x++){
// 		start(x);
// 		onProgress(x);
// 	}
// });
// //call to progess function
// progress(15, onStart, onProgress, onEnd);
// progressBar.emit('start', '10');
// progressBar.emit('onProgress', 10);
// progressBar.emit('progress', 'start', 'onProgress');


