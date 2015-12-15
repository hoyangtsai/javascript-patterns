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

## Classical 模式 #3 - 借用並設定原型
將前面兩個模式組合起來，首先借用建構式，接著也將子建構式的原型指向父建構式的新實體：
```javascript
function Child(a, c, b, d) {
  Parent.apply(this, arguments);
}
Child.prototype = new Parent();
這樣的優點，是子建構式取得了父建構式自身成員的複製，也取得了指向父建構式原型成員的參考，也就是可重用的功能，而且子建構式也可以傳遞任何參數給父建構式。這大概最接近在 Java 中所預期的行為；你可以繼承來自父親的全部，同時修改自身的屬性也非常安全，不會有改到父物件屬性的風險。

缺點是父建構式是被呼叫了兩次，效率較差。而最後自身屬性 (例如本例中的 name) 被繼承了兩次。

## Classical 模式 #4 - 分享原型
不像 Classical 模式 #3 需要呼叫兩次父建構式。這個模式完全不會引發父建構式的呼叫。

經驗法則是，可重用的成員都應放在原型裡，而不應放在 this 裡。因此為了繼承這個目的，任何值得繼承的事物都應放在原型中。
```javascript
function inherit(C, P) {
  C.prototype = P.prototype;
}
```
這樣可以帶來更快速的原型練查詢，因為所有的物件其實都分享相同的原型。但這也是它的缺點，因為只要繼承鏈的某處，可能是子物件，甚至子物件的子物件，若修改了原型，就會影響整個繼承鏈上的所有物件。

## Classical 模式 #5 - 暫時的建構式
此模式解決了相同原型的問題，打斷父原型和子原型間的直接連結，同時又能受益於原型鏈的優點。

底下是此模式的一份實作，當中你有個空的函式 F()，其作為父子建構式之間的代理 (proxy)。F() 的 prototype 屬性指向父建構式的原型。而子建構式的原型則是這空函式的實體：
```javascript
function inherit(C, P) {
  var F = function () {};
  F.prototype = P.prototype;
  C.prototype = new F();
}
```
這樣通常還不錯，其實是更好，因為原型就是為了放置可重用功能的地方。在這個模式裡，任何在父建構式加在 this 的成員都不會被繼承。
```javascript
var kid = new Child();
```
若你存取 kid.name，它會是 undefined。在這個例子中 name 是父建構式的自身屬性，而在繼承的過程中，其實根本沒有呼叫 new Parent()，因此其實從未建立這屬性。而當存取 kid.say() 的時候，它在物件 kid 中不存在，所以會向原型鏈查詢。物件 F 也沒有這個方法，但物件 Parent.prototype 有。物件 Parent.prototype 會讓所有繼承 Parent() 的不同建構式，和所有這些子建構式所建立的物件所共享，它們使用的都是同一塊記憶體。

### 保存 Superclass
建構在前一個模式基礎之上，可以新增一個參考指向原本的父親。這很類似在別的語言中的 superclass，在某些場合會很方便。
```javascript
function inherit(C, P) {
  var F = function () {};
  F.prototype = P.prototype;
  C.prototype = new F();
  C.uber = P.prototype;
}
```
