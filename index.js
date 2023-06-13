document.getElementById('task-table').addEventListener('create',async function(event){
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
  