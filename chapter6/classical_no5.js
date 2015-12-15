// 父建構式
function Parent(name) {
  this.name = name || 'Adam';
}

// 在原型中新增功能
Parent.prototype.say = function() {
  return this.name;
};

function inherit(C, P) {
  var F = function () {};
  F.prototype = P.prototype;
  C.prototype = new F();
}

// 空的子建構式
function Child(name) {}

// 繼承的魔法
inherit(Child, Parent);

var kid = new Child();
console.log(kid.name); // undefined
console.log(kid.say()); // undefined
