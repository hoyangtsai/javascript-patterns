// 父建構式
function Parent(name) {
  this.name = name || 'Adam';
  this.say = function() { return 'dsddd' }
}

// 在原型中新增功能
Parent.prototype.say = function() {
  return this.name;
};

function inherit(C, P) {
  var F = function () {};
  F.prototype = P.prototype;
  C.prototype = new F();
  C.uber = P.prototype;
  C.prototype.constructor = C;
}

// 空的子建構式
function Child(name) {}

// 繼承的魔法
inherit(Child, Parent);

// 試試水溫
var kid = new Child();
console.log(kid.constructor.name); // "Parent"
console.log(kid.constructor === Parent); // true;
console.log(kid);
console.log(kid.__proto__.name);