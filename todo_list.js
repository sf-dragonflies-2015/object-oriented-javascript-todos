var TodoList = function() {

  todoList = {

    add: function(item) {
      task = new Task({id: this.tasks.length+1, description: item});
      this.tasks.push(task);
    },

    tasks: [],

    list: function() {
      for (index=0;index<this.tasks.length;index++) {
        console.log(this.tasks[index]);
      }
    },

    remove: function(item) {
      for (index = 0; index < this.tasks.length; index ++) {
        if (item.id == index){
          this.tasks.splice(index,1);
        }
      }
    }

  };


  return todoList;
};

var Task = function(options) {
  if (!options) options = {};
  this.id = options.id;
  this.description = options.description;
  this.completed = false;
}

Task.prototype.complete = function(){
  this.completed = true;
}


// Driver code


var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
console.log(groceryList.tasks) //-> [Task, Task, Task]

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
