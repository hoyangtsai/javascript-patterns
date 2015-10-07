var man = {
  hand: 2,
  legs: 2,
  head: 1
};

var hasOwn = Object.prototype.hasOwnProperty;

// extend
if (typeof Object.prototype.clone === 'undefined') {
 Object.prototype.clone = function() {};
}

for (var i in man) {
 // if (man.hasOwnProperty(i)) {
 // if (Object.prototype.hasOwnProperty.call(man, i)) {
 if (hasOwn.call(man, i)) {
   console.log(i, ' : ', man[i]);
 }
}

// function is also an object
var func = function() {
  var local = 0;
  this.test = 123;
};

// for (var i in func) {
//   console.log(i, ' : ', func[i]);
// }


function a() {
  console.log(arguments);
}

// a(1, 2, 3);

a.call(man, 1, 2, 3);