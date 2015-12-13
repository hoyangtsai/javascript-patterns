## Classical 模式 #1 - 預設的模式
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
```

### 預設模式 #1 的缺點
這個模式的缺點之一，是你同時繼承加在 this 上本身的屬性和原型的屬性。大多時候你並不想要本身的屬性，因為它們比較像是屬於特定的實體的，並不適合重用。

> 關於建構式有個通用的基本原則，是可重用的成員都應放在原型裡。

這個泛用的 inherit() 還有一個缺點，它不能讓你傳遞參數給子建構式，在讓子建構式傳遞給父建構式。考慮這個例子：

```javascript
var s = new Child('Seth');
s.say(); // "Adam"
```

## Classical 模式 #2 - 借用建構式
這個模式解決了由子建構式傳遞參數給父建構式的問題。它「借用」了父建構式，將子建構式用 this 綁定父建構式，並轉送所有參數：
```javascript
function Child(a, c, b, d) {
  Parent.apply(this, arguments);
}
```
用這個方法，你只繼承了在父建構式中加至 this 的屬性，而沒有繼承到加至原型的成員。

### 用借用建構式實現多重繼承
使用借用建構式模式，只需要借用多個建構式就可以達成多重繼承：
```javascript
function Cat() {
  this.legs = 4;
  this.say = function() {
    return "meaowww";
  }
}

function Bird() {
  this.wings = 2;
  this.fly = true;
}

function CatWings() {
  Cat.apply(this);
  Bird.apply(this);
}

var jane = new CatWings();
console.log(jane);
```
### 借用建構式模式的優點與缺點
此模式的缺點很明顯，就是原型的屬性都沒有被繼承，而且就如前面所提的，原型是用來放置重複利用的屬性和方法的地方，因為它不會為每個實體重新建立。

但有一個優點，你可以拿到真正來自父物件自身屬性的複製，所以子物件不會有意外覆寫到父物件屬性的風險。
