function Class(name, tuition) {
  this.name = name;
  this.tuition = tuition;
}

Class.prototype.description = function () {
  console.log('Hello ' + this.name + " " +this.tuition);
};

var nodejs = new Class('Lap Trinh NODEJS', 100000);
nodejs.description();
