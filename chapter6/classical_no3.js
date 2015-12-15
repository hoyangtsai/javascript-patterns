// 父建構式
function Parent(name) {
  this.name = name || 'Adam';
}

// 在原型中新增功能
Parent.prototype.say = function() {
  return this.name;
};

function inherit(C, P) {
  C.prototype = new P();
}

function Child(name) {
  Parent.apply(this, arguments);
}
Child.prototype = new Parent();

var kid = new Child("Patrick");
// kid.name = "Patrick"; // Patrick
console.log(kid.say()); // Patrick

delete kid.name;
console.log(kid.say()); // Adam