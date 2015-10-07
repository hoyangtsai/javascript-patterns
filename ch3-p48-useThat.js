//function Waffle() {
//  var that = {};
//  that.tastes = "yummy";
//  return that;
//}

function Waffle(){
  return {
    tastes: "yummy"
  };
}

var first = new Waffle(),
    second = Waffle();
    
console.log(first.tastes);
console.log(second.tastes);