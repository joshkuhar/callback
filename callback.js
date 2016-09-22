function wait(seconds, callback) {
  setTimeout(function(){
    callback(console.log("i'm the callback"));
  }, seconds * 1000);
}

wait(1, function(date) {
  console.log('Console log inside anonymous callback:', date);
});

var phrase = "Hello, world";

function printWords(words){
  console.log(words + ' again');
}

function getWords(saying, callback){
  console.log(saying);
  callback(saying);
}



getWords(phrase, printWords);

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

function progress(max, onStart, onProgress, onEnd){
  var x = 0;
  while(x < max){
    x++;
    onStart(x);
    onProgress(x);
    onEnd(x, max);
  }
}
progress(15, onStart, onProgress, onEnd);