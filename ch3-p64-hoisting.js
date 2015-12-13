function foo() {
  console.log('global foo');
}

function bar() {
  console.log('global bar');
}

function hoistMe() {
  console.log(typeof foo); // function
  console.log(typeof bar);  // undefined

  foo(); // local foo
  bar(); // error

  function foo() {
    console.log('local foo');
  }

  var bar = function() {
    console.log('local bar');
  };
}

hoistMe();