(function(){

var idCounter = 1;

Task = function(description) {
  this.id = idCounter
  this.description = description;
  this.completed = false;
  idCounter++
}

List = function(name) {
  this.name = name;
  this.list = [];
}

List.prototype.add = function(task) {
  this.list.push(new Task(task));
}

List.prototype.list = function() {
  console.log(this.list);
}

List.prototype.indexOf = function(arg) {
  for (var i = 0; i < this.list.length; i++) {
    if (this.list[i].description === arg) {
      return i;
    };
  };
}

List.prototype.remove = function(index) {
  this.list.splice(index, 1);
}

List.prototype.get = function(index) {
  return this.list[index].description;
}

List.prototype.complete = function(index) {
  this.list[index].completed = true;
}

})();

// Driver code

test_list = new List("my list") //creates new to do list
test_list.add("walk dog") //adds "walk dog" as a Task object to test_list
test_list.add("walk cat") //adds "walk cat" as a Task object to test_list
test_list.list //displays all tasks in test_list
test_list.indexOf("walk dog") //returns 0
test_list.remove(0) //deletes "walk dog" from test_list
test_list.get(0) //returns "walk cat"
test_list.complete(0) //completed=>true
