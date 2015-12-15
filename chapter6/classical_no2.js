// 借用建構式

// 父建構式
function Parent(name) {
  this.name = name || 'Adam';
}

// 在原型中新增功能
Parent.prototype.say = function() {
  return this.name;
};

// 子建構式
function Child(name) {
  Parent.apply(this, arguments);
}

var kid = new Child("Patrick");
console.log(kid.name); // "Patrick"
delete kid.name;
console.log(kid.name); // undefined
console.log(typeof kid.say); // undefined

// inherit parent constructor only without calling "inherit" function every time which is inefficient