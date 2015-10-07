var one = {
  name: "object",
  say: function (greet) {
    return greet + ", " + this.name;
  }
};
//console.log(one.say('hi'));

var two = {
  name: "another object"
};
//console.log(one.say.apply(two, ['hello']));


// assigning to a variable
// `this` will point to the global object
var say = one.say;
//console.log(say('hoho')); // "hoho, undefined"

// passing as a callback 
var yetanother = {
  name: "Yet another object", 
  method: function (callback) {
    return callback('Hola');
  }
};
//console.log(yetanother.method(one.say)); // "Holla, undefined"



function bind(o, m) {
  return function () {
    return m.apply(o, [].slice.call(arguments));
  };
}

var twosay = bind(two, one.say);
console.log(twosay('yo'));
