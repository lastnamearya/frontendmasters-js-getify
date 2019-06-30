// This Loop will give us an output of 10 ( 10 Times )

// Reason why it happens? It's a scope problem, Here setTimeout hold 10 invokation of the function inside / callback passed because setTimeout is in the Loop and when all these function invokations executes 10 times and it refers to the outer global variable i.

for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log("The number is " + i);
  }, 0);
}

// How to fix that Issue? The problem exists due to the outer scope. as i is defined by the var keyword that has no block scoping so it won't create any private scopes for the variable i, Instead it's a global variable that is going to be update 10 Times. And our function inside setTimeout that is waiting for 10 Executions will refrence that variable when executes at that time value of i will be 10.

// Approach One: We can solve this using let keyword for i variable. After that it'll create 10 different private scope for the value of i that the function inside setTimeout can access.

for (let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 10);
}

// Approach Two: Or we can create a Private Scope using an IIFE that has reference to the variable i and hold it's value which is not going to be collected by the gargable collector while execution.

for (var i = 0; i < 10; i++) {
  (function(i) {
    setTimeout(function() {
      // Here i will reference to the private scope value of i, i.e created 10 times.
      console.log(i);
    }, 10);
  })(i);
}
