const formEl = document.getElementsByClassName("form");
const contentEL = document.getElementsByClassName("js--todos-wrapper");
const listGroupItems = document.getElementsByClassName("js--todos-wrapper");

const toDoLists = JSON.parse(localStorage.getItem("toDoList")) || [];

formEl[0].addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        let name = document.getElementById("js--form-id").value;
        if (name.trim() !== "") {
            addToDoList(name);
        }
    }
});

listGroupItems[0].addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const listItem = event.target.closest('.todo-item');
        const itemId = listItem.getAttribute('data-id');
        delElement(itemId);
        viewTodoList();
    }
    if (event.target.tagName === "INPUT") {
        const listItem = event.target.closest('.todo-item');
        const itemId = listItem.getAttribute('data-id');
        let isDone = event.target.checked;
        updateElement(itemId, isDone);
        viewTodoList();
    }
});

function addToDoList(name, isDone = false) {
    toDoLists.push({id: toDoLists.length, name, isDone});
    localStorage.setItem("toDoList", JSON.stringify(toDoLists));
}

function viewTodoList() {
    let listItemsHTML = "";
    for (let list of toDoLists) {
        listItemsHTML +=
            `<li class="todo-item"  data-id=${list.id}>
                        <input type="checkbox" ${list.isDone ? "checked" : ""}>
                        <span class="todo-item__description ${list.isDone ? "todo-item--checked" : ""}">${list.name}</span>
                        <button class="todo-item__delete">Видалити</button>
                    </li>`;
    }
    contentEL[0].innerHTML = listItemsHTML;
}

function updateElement(id, isDone) {
    for(let item of toDoLists) {
        if(item.id === Number(id)) {
            item.isDone = isDone;
            localStorage.setItem("toDoList", JSON.stringify(toDoLists));
            break;
        }
    }
}

function delElement(id) {
    for(let item of toDoLists) {
        if(item.id === Number(id)) {
            toDoLists.splice(toDoLists.indexOf(item), 1);
            localStorage.setItem("toDoList", JSON.stringify(toDoLists));
            break;
        }
    }
}

viewTodoList();