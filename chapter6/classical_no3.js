// 借用並設定原型

// 父建構式
function Parent(name) {
  this.name = name || 'Adam';
}

// 在原型中新增功能
Parent.prototype.say = function() {
  return this.name;
};

function Child(name) {
  Parent.apply(this, arguments);
}
Child.prototype = new Parent();

var kid = new Child("Patrick");
kid.name = "Patrick"; // Patrick
console.log(kid.say()); // Patrick
delete kid.name;
console.log(kid.say()); // Adam

// inherit parent constructor and functions without calling "inherit" function every time