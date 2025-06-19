const input = document.getElementById("todo-input");
const btn = document.getElementById("tod-btn");
const list = document.getElementById("list");

console.log(input) 

btn.addEventListener("click", () =>{
    const newTask = input.value;
    if(newTask,trim() !== ""){
        const li = document.createElement("li");
        li.textContent = newTask;
        list.appendChild(li);
        input.value = " ";
    }
    const delete-btn = document.createElement("button");
    delete.textContent = "delete";
    li.appendChild(deletebtn)
})