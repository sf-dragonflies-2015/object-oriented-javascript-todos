


var Item = function(description, id) {
  this.description = description;
  this.id = id
  this.completed = false;
};

Item.prototype.complete = function() {
    this.completed = true;
  };

TodoList.prototype.generate_id = function() {
  return (this.tasks.length + 1)
};

function TodoList() {
	this.tasks = []

  TodoList.prototype.add = function(item) {
    this.tasks.push(new Item(item, this.generate_id()))
  };

  TodoList.prototype.remove = function(index) {
    this.tasks.slice((index.id), 2)
  };


  TodoList.prototype.list = function() {
     for (var i = 0; i < this.tasks.length; i++) {
      console.log(this.tasks[i]);
    };
  };

  TodoList.prototype.complete = function(index) {
    this.tasks[index].completed = true
  };
};
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

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

breadTask.completed //-> true

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
groceryList.remove(breadTask);

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}
