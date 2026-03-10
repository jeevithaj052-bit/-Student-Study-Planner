function addTask(){

let task = document.getElementById("taskInput").value;

if(task === ""){
alert("Enter a task");
return;
}

let li = document.createElement("li");
li.textContent = task;

li.onclick = function(){
this.classList.toggle("completed");
}

let del = document.createElement("button");
del.textContent = "Delete";

del.onclick = function(){
li.remove();
updateCount();
}

li.appendChild(del);

document.getElementById("taskList").appendChild(li);

document.getElementById("taskInput").value = "";

updateCount();

}

function updateCount(){
let count = document.getElementById("taskList").children.length;
document.getElementById("count").innerText = count;
}
