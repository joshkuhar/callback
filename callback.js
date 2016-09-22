// function wait(seconds, callback) {
//   setTimeout(function(){
//     callback(console.log("i'm the callback"));
//   }, seconds * 1000);
// }

// wait(1, function(date) {
//   console.log('Console log inside anonymous callback:', date);
// });

// var phrase = "Hello, world";

// function printWords(words){
//   console.log(words + ' again');
// }

// function getWords(saying, callback){
//   console.log(saying);
//   callback(saying);
// }
// getWords(phrase, printWords);

// Instructions
// Write a simple progress bar function in the callback style. Your function 
// should take three callbacks, onStart, onProgress, and onEnd as arguments. 
// When you call the function it should call the onStart callback, then loop 
// from 1 to 100, using console.log to print each value. Every 10 items it 
// counts it should call the onProgress callback, providing how far along it 
// is as an argument. Finally it should call the onEnd callback.


//functions
function onStart(number){
  console.log(number);
}
function onProgress(number){
  if (number % 5 === 0 && number !== 0)
    console.log("I'm divisible by 5");
}
function onEnd(number, max){
  if (number === max){
    console.log("I'm done");
  }
}

//progress function that takes three callbacks
function progress(max, onStart, onProgress, onEnd){
  var x = 0;
  while(x < max){
    x++;
    onStart(x);
    onProgress(x);
    onEnd(x, max);
  }
}
//call to progess function
progress(15, onStart, onProgress, onEnd);

// Refactored code
// 
//function that takes a callback
function onStart(number, callback){
  console.log(number);
  callback(number);
}
//function that takes callback function that takes a callback function
function progress(max, onStart){
  var x = 0;
  while(x < max){
    x++;
    onStart(x, function(x){
      if (x % 5 === 0 && x !== 0)
        console.log("I'm divisible by 5");
    });
  }
}
progress(10, onStart);
