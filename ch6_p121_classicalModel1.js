function Parent(name) {
  this.name = name || 'Adam';
}

Parent.prototype.say = function () {
  return this.name;
}

// function inherit(C, P) {
//   C.prototype = new P();
// }

// function Child() {

// }

// Classical Model #2
function Child(name) {
  Parent.apply(this, arguments);
}

// inherit(Child, Parent);


var kid = new Child();
kid.name = 'Patrick';
// kid.say();

// delete kid.name;

console.log(kid);