// 分享原型

// 父建構式
function Parent(name) {
  this.name = name || 'Adam';
}

// 在原型中新增功能
Parent.prototype.say = function() {
  return this.name;
};

function inherit(C, P) {
  C.prototype = P.prototype;
}

function Child(name) {
  Parent.apply(this, arguments);
}
inherit(Child, Parent);

var ten = new Parent();
console.log(ten);
var kid = new Child("Patrick");
console.log(kid.say()); // Patrick
delete kid.name;
console.log(ten.say());
console.log(kid.say()); // Adam