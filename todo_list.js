TodoList = function() {
	this.tasks = [];
};


// TEST
Task = function(args) {
  // console.log(args);
  if (!args) { args = {} };

  this.id = args.id;
  this.description = args.item;
  this.completed = false;
};

TodoList.prototype.add = function(item) {
  task_object = new Task({id: (this.tasks.length + 1), item: item});
  this.tasks.push(task_object);
}



TodoList.prototype.list = function() {
  return this.tasks
}

Task.prototype.complete = function() {
  this.completed = true;
}

TodoList.prototype.remove = function(task_name) {
  var idx = this.tasks.indexOf(task_name);
  this.tasks.splice(idx, 1)
}



// Driver code

// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

console.log(breadTask.id) //-> 1 (some unique numerical ID)
console.log(breadTask.description) //-> 'bread'
console.log(breadTask.completed) //-> false

console.log(groceryList.list());
// This should complete the task
breadTask.complete();

console.log(breadTask.completed) //-> true

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
groceryList.remove(breadTask);

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}

console.log(groceryList.tasks);








