var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function (event) { 

   event.preventDefault();
   //allows the user input to create task
   var taskNameInput = document.querySelector("input[name='task-name']").value;
   var taskTypeInput = document.querySelector("select[name='task-type']").value;
   console.log(taskTypeInput);
   // check if input values are empty strings
   if (!taskNameInput || !taskTypeInput) {
    alert("Fill out Task Form!");
    return false;
   }
   formEl.reset();


   var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
   };

   createTaskEl(taskDataObj);
    
};

var createTaskEl = function(taskDataObj) {

    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    // create div to hold task info and add to list with a class
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    //add HTML content to div
    taskInfoEl.innerHTML = "<h3 class= 'task-name'>" + taskDataObj.name + "</h3><span class= 'task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);

    //ADD ENTIRE LIST ITEM TO LIST
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", taskFormHandler);