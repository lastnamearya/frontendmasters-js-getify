// How important is to master Scope & Closure ~ Second Pillar in JavaScript.

var teacher = "Kyle";

console.log(teacher);

function otherClass() {
  // Here we dont' have a variable declaration with identifier teacher, so It'll look for the variable teacher in the outer parent scope (global) and updates (re-assign) the value of teacher variable.

  teacher = "Suzy";
  topic = "React";
  console.log("Welcome");
}

otherClass();

console.log(teacher);

console.log(topic);
