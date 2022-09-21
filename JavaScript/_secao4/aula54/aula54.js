
function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

//sem callback

// function f1() {
//   setTimeout(function() {
//     console.log('f1');
//   }, rand());
// }

// function f2() {
//   setTimeout(function() {
//     console.log('f2');
//   }, rand());
// }

// function f3() {
//   setTimeout(function() {
//     console.log('f3');
//   }, rand());
// }
// f1();
// f2();
// f3();
// console.log('Ola mundo!');


// com callback
function f1(callback) {
  setTimeout(function () {
    console.log('f1');
    if (callback) callback();
  }, rand());
}

function f2(callback) {
  setTimeout(function () {
    console.log('f2');
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function () {
    console.log('f3');
    if (callback) callback();
  }, rand());
}
//com funções anonimas
// f1(function () {
//   f2(function () {
//     f3(function () {
//       console.log('Ola mundo!');
//     });
//   });
// });

//com funções declaradas

f1(f1Callback);
function f1Callback() {
  f2(f2Callback);
}
function f2Callback() {
  f3(f3Callback);
}
function f3Callback() {
  console.log('Ola mundo!');
}