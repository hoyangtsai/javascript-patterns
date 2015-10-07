function mix() {
    var arg, prop, child = {};
    console.log(arguments);
    for (arg = 0; arg < arguments.length; arg += 1) {
      for (prop in arguments[arg]) {
        if (arguments[arg].hasOwnProperty(prop)) {
          child[prop] = arguments[arg][prop];
        }
      }
    }
    return child;
}

var cake = mix(
  {eggs: 2, large: true},
  {butter: 1, salted: true},
  {flour: "3 cups"},
  {sugar: "sure!"}
)

//console.log(cake);