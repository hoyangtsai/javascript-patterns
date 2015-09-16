'use strict';

function f() {
  var args = [].slice.call(arguments, 1, 3);
  return args;
}

console.log(f(1, 2, 3, 4, 5, 6));