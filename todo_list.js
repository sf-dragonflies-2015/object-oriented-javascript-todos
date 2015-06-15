var TodoList = function() {
  this.tasks = []
	//add, id, description, completed, complete(), list()
};

var Task = function(options){
  if (!options) options = {};
  this.id = options.id;
  this.description = options.description;
  this.completed = false;
}

Task.prototype.complete = function(){

}

TodoList.prototype.add = function(description) {
  this.tasks.push(new Task({id:this.tasks.length+1, description: description}));
  };

TodoList.prototype.list = function(){
  this.tasks.forEach(function(n){
        console.log(n);
      })
    };

TodoList.prototype.remove = function(task) {
  for(var i = 0; i < this.tasks.length; i++){
    if(this.tasks[i] === task)
      this.tasks.splice(0,i);
  }
};

//Pseudocode
// list() is a function within todolist
// remove(item) is a function within todolist
// remove deletes item instance of task from tasks array

// Task Constructor
// complete(); -- no parameter, changes completed attribute from false to true


// Driver code


var todoList = new TodoList();
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
console.log(groceryList.tasks);
groceryList.list();
var breadTask = groceryList.tasks[0];
groceryList.remove(breadTask);

