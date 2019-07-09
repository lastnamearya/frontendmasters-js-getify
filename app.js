function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function(question) {
  console.log(this.teacher, question);
};

var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");

// Here "this" implicity binds to deepJS Instance object
deepJS.ask("Is 'prototype' a class?");

// Here "this" implicity binds to reactJS Instance object
reactJS.ask("Isn't 'prototype' ugly?");
