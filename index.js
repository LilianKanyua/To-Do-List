// let  taskTable = document.getElementById("task-table");
// let newTaskInput = document.getElementById("new-task");


document.getElementById('task-table').addEventListener('click',async function(event){
    event.preventDefault();
    let  addedTask= document.getElementById('new-task').value;
    let data ={
        addedTask:addedTask
    
    };
    console.log({data})

    let result = await fetch('https://dummyjson.com/todos/add',{
    method: 'POST',
    headers:{
        'Content-Type':'application/json'
    },
body:JSON.stringify(data)
})
.then(response =>response.json())
.then(response=> response)
.catch(error=>error.message)


// console.log({result})
console.log({data})
console.log({result})

let success = document.getElementById('success');
result.id? success.innerHTML='New task successfully added': success.innerHTML= 'Task not added.'


});
// let taskTable = document.getElementById("task-table");

let taskTable = document.getElementById("task-table");

taskTable.addEventListener("click", function(event) {

  if (event.target.type === "delete") {
  
    var todoId = event.target.parentNode.id;

    
    fetch(`https://dummyjson.com/todos/${todoId}`, {
      method: "DELETE"
    })
      .then(response => {
        if (response.ok) {
         
          let todoItem = document.getElementById(todoId);
          todoItem.remove();
          console.log("Task deleted successfully.");
        } else {
          console.error("Error deleting task");
        }
      })
      .catch(error => console.error(error));
  }
});

// document.getElementById("task-form").addEventListener("submit", async function(event) {
//   event.preventDefault();


//   let addedTask = document.getElementById('new-task').value;


//   let data = {
//     addedTask: addedTask
//   };