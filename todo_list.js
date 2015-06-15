/*
pseudocode
- add
- remove
- list / tasks
-

*/

var TodoList = function() {
  this.list = [];
};

TodoList.prototype.add = function(item) {
  this.list.push(item);
}

TodoList.prototype.remove = function(item) {
  this.list.splice(item, 1);
}

TodoList.prototype.tasks = function() {
  return this.list;
}

//Task {id: 1, description: 'bread', completed: false}
var Task = function(id, description) {
  this.id = id;
  this.description = description;
  this.completed = false;
}

Task.prototype.complete = function() {
  this.completed = true;
}

breadTask = new Task(1, "bread making")
milkTask = new Task(2, "milk making")
cheeseTask = new Task(3, "cheese making")


// Driver code


var todoList = new TodoList();
todoList.add(breadTask)
todoList.add(milkTask)
todoList.add(cheeseTask)

