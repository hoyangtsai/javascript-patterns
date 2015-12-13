# Classical 模式 #1 - 預設的模式
```javascript
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
kid.say(); // "Patrick"
```

## 模式 #1 的缺點

這個模式的缺點之一，是你同時繼承加在 this 上本身的屬性和原型的屬性。大多時候你並不想要本身的屬性，因為它們比較像是屬於特定的實體的，並不適合重用。

> 關於建構式有個通用的基本原則，是可重用的成員都應放在原型裡。

這個泛用的 inherit() 還有一個缺點，它不能讓你傳遞參數給子建構式，在讓子建構式傳遞給父建構式。考慮這個例子：

```javascript
var s = new Child('Seth');
s.say(); // "Adam"
```
