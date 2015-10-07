function Waffle() {
  if (!(this instanceof Waffle)) {
    return new Waffle();
  }
  this.tastes = "yummy";
}

var good_morning = new Waffle();
console.log(typeof good_morning);
console.log(good_morning.tastes);

//anti-pattern
var ap_good_morning = Waffle();
console.log(typeof ap_good_morning);
console.log(ap_good_morning.tastes);