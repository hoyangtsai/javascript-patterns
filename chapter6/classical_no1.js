// 預設的模式

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

// 空的子建構式
function Child(name) {}

// 繼承的魔法
inherit(Child, Parent);

var kid = new Child();
kid.name = "Patrick";
console.log(kid.say()); // Patrick
delete kid.name;
console.log(kid.say()); // Adam

// inherit parent constructor and functions without own constructor
// consider this
// var s = new Child('Seth');
// s.say(); // Adam