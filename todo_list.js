var idCount = 1

TodoList = function() {
  this.tasks = [];
  // var todoList = {tasks:[]};
  // return todoList;
 };

Task = function(options) {
  this.id= idCount;
  this.description= options['description'];
  this.completed= false;
  idCount++;
  this.complete = function(index) {
    if (index != -1) {
      this.completed = true;
    }
  }
}

TodoList.prototype.add = function(thing){
  // this.add = function(thing) {
    var task = new Task({description:thing});
    console.log(task);
    this.tasks.push(task);
  }
// }
TodoList.prototype.indexOf = function(thing) {
  // this.indexOf = function(thing) {
    for (i=0; i<this.tasks.length; i++) {
      if (this.tasks[i].name === thing) {
        console.log(i);
      }
    }
  }
// }
TodoList.prototype.remove = function(index) {
  // this.remove = function(index) {
      console.log(this.tasks.splice(index, 1));
  }
// }
TodoList.prototype.list = function() {
  // this.list = function(){
    console.log(this);
  }
// }
TodoList.prototype.get = function(index) {
  // this.get = function(index) {
    if (index != -1){
      console.log( this.tasks[index])
    }
  }
// }


// Driver code


// var todoList = new TodoList();
// todoList.add("bread");
// todoList.add("milk");
// todoList.add("cheese");
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
groceryList.remove(0);

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}

