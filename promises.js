// function wait(seconds, callback) {
//   setTimeout(function(){
//     callback(new Date());
//   }, seconds * 1000);
// }

// console.log('Console log before calling wait:', new Date());

// wait(3, function(date) {
//   console.log('Console log inside first callback:', date);
//   wait(2, function(date) {
//     console.log('Console log inside second callback:', date);
//     wait(5, function(date) {
//       console.log('Console log inside third callback:', date);
//     });
//   });
// });

// console.log('Console log after calling wait:', new Date());

// var promise = new Promise(function(resolve) {
//   resolve('success');
// });

//console.log(promise);

// promise.then(function(result) {
//   console.log(result);
//   return result;
// }).then(function(result) {
//   console.log(result);
//   return result;
// }).then(function(result) {
//   console.log(result);
// });

// function wait(seconds) { 
//   return new Promise(function(resolve) {
//     setTimeout(function(){
//       resolve(new Date());
//     }, seconds * 1000);
//   });
// }

// console.log('Console log before calling wait:', new Date());

// wait(3).then(function(date) {
//   console.log('Console log after three seconds:', date);
//   return wait(1);
// }).then(function(date) {
//   console.log('Console log after one second:', date);
//   return wait(5);
// }).then(function(date) {
//   console.log('Console log after five seconds:', date);
// });

// console.log('Console log after calling wait:', new Date());

async function wait(seconds) {
  await setTimeout(function(){
    console.log('Console log after async await:', new Date());
  }, seconds * 1000);
}

console.log('Console log before calling wait:', new Date());

wait(3);

console.log('Console log after calling wait:', new Date());












