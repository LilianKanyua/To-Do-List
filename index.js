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

// Delete a task when the "Delete" button is clicked
taskTable.addEventListener("click", function(event) {
  // Check if the clicked element is a "Delete" button
  if (event.target.type === "delete") {
    // Get the ID of the task to delete
    var todoId = event.target.parentNode.id;

    // Send a DELETE request to remove the task from the server
    fetch(`https://dummyjson.com/todos/${todoId}`, {
      method: "DELETE"
    })
      .then(response => {
        if (response.ok) {
          // Remove the task from the task table
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
// const addTask = (description) => {
//     // Create a new JSON object.
//     const body = {
//       title,
//       description,
//       dueDate
//     };
  
//     // Send the request.
//     return fetch("https://dummyjson.com/todos/add", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify(body)
//     });
//   };
  
//   // Add a new task.
//   const task = await addTask("Task title", "Task description", "2023-06-15");
  
//   // Print the task details.
//   console.log(task);
  