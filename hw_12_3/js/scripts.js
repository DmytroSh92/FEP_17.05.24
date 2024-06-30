const taskList = document.getElementById("task-list");
const addTask = document.getElementById("add-task");
const taskName = document.getElementById("input-add-task");

taskList.addEventListener("click", (event)=>{
    if(event.target.tagName === "BUTTON"){
        const liElement = event.target.closest('li');
        liElement.remove();
    }
});

addTask.addEventListener("click", ()=>{
    const inputValue = taskName.value;
    taskName.value = "";
    if(inputValue.length > 0) {
        const liEl = document.createElement("li");
        const butEl = document.createElement("button");
        butEl.textContent = "Видалити";
        liEl.textContent = inputValue;
        liEl.append(butEl);
        taskList.append(liEl);
    }
});