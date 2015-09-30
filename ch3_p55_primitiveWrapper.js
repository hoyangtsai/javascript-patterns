// primitive wrapper object
var greet = new String("Hello there");
// original string
// temporarily convert to string object
// var greet = "Hello there";

console.log(greet.split(' ')[0]);

// only if using primitive wrapper object
greet.smile = true;
// otherwise object.property is undefined
console.log(typeof greet.smile);

var str = new String('dssddd');

console.log(typeof str.smile);