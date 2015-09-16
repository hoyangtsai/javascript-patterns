//console.log(Array.isArray({
//  length: 1,
//  "0": 1,
//  slice: function() {}
//}));

if (typeof Array.isArray === "undefined") {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
  }
}

console.log(
  Object.prototype.toString.call([1,2])
);
