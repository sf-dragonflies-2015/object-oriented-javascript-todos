var TodoList = function() {

    this.add = function(item) {
      task = new Task({id: this.tasks.length+1, description: item});
      this.tasks.push(task);
    }

    this.tasks = []

    this.list = function() {
      for(i in this.tasks){
        console.log(this.tasks[i]);
      };
    }
};

TodoList.prototype.remove = function(item) {
  for(i in this.tasks) {
    if (this.tasks[i] === item) {
      this.tasks.splice(i,1);
    }
  }
}


var Task = function(option){
  if(!option) {
    option = {};
  }
  this.id = option.id;
  this.description = option.description;
  this.completed = false;
};

Task.prototype.complete = function(){
  this.completed = true;
}




    // var task = {
    //   id: task_list.length + 1,
    //   description: item,
    //   completed: false
    // };
// Driver code

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

