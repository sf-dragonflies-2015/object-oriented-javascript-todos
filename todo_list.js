Task = function(descript, id) {
  this.description = descript;
  this.completed = false;
  this.id = id;
}

Task.prototype.complete = function() {
  this.completed = true;
}

TodoList = function(){
  this.tasks = [];
  this.current_id = 0;
}

TodoList.prototype.list = function(){
  return this.tasks;
}

TodoList.prototype.add = function(task_string){
  this.tasks.push( new Task(task_string, this.current_id))
  this.current_id++ ;
}

TodoList.prototype.remove = function(task) {
  for(var i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i] === task) {
      this.tasks.splice(i, 1);
    }
  }
}

groceryList = new TodoList();


groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
var breadTask = groceryList.tasks[0];
// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object

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

