var parent = {
  name: "Papa"
};

var child = Object.create(parent [{age: 23}]);

console.log(child.name);