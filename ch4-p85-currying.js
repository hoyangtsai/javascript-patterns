function add(x, y) {
  var oldx = x, oldy = y;
  if (typeof oldy === "undefined") {
    return function (newy) {
      return oldx + newy;
    };
  }
  
  return x + y;
}

//console.log(typeof add(5));
//
//console.log(add(3)(4));

var add2000 = add(2000);
console.log(add2000);

console.log(add2000(10));