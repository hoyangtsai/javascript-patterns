function foo() {
  console.log('global foo');
}

function bar() {
  console.log('global bar');
}

function hoistMe() {
  console.log(typeof foo);
  console.log(typeof bar);
  
  foo();
  bar();
  
  function foo() {
    console.log('local foo');
  }

  var bar = function() {
    console.log('local bar');
  };
}

hoistMe();