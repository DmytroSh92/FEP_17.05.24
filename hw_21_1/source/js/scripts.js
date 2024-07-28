const formEl = $(".form");
const contentEL = $(".js--todos-wrapper");

const toDoLists = JSON.parse(localStorage.getItem("toDoList")) || [];

formEl.on("click", "button", (event) => {
    event.preventDefault();  // Prevent form submission
    let name = $("#js--form-id").val();
    if (name.trim() !== "") {
        addToDoList(name);
        viewTodoList();
    }
});

contentEL.on("click", "button.todo-item__delete", (event) => {
    const listItem = $(event.target).closest('.todo-item');
    const itemId = listItem.data('id');
    delElement(itemId);
    viewTodoList();
});

contentEL.on("change", "input[type='checkbox']", (event) => {
    const listItem = $(event.target).closest('.todo-item');
    const itemId = listItem.data('id');
    let isDone = $(event.target).is(':checked');
    updateElement(itemId, isDone);
    viewTodoList();
});

contentEL.on("click", ".todo-item__description", function() {
    const listItem = $(this).closest('.todo-item');
    const itemId = listItem.data('id');
    const task = toDoLists.find(item => item.id === itemId);
    if (task) {
        $('#task-modal').find('.modal-title').text('Task Details');
        $('#task-modal').find('#task-name').text(task.name);
        $('#task-modal').find('#task-status').text(task.isDone);
        $('#task-modal').modal('show');
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
            `<li class="todo-item" data-id=${list.id}>
                <input type="checkbox" ${list.isDone ? "checked" : ""}>
                <span class="todo-item__description ${list.isDone ? "todo-item--checked" : ""}">${list.name}</span>
                <button class="todo-item__delete">Видалити</button>
            </li>`;
    }
    contentEL.html(listItemsHTML);
}

function updateElement(id, isDone) {
    for (let item of toDoLists) {
        if (item.id === Number(id)) {
            item.isDone = isDone;
            localStorage.setItem("toDoList", JSON.stringify(toDoLists));
            break;
        }
    }
}

function delElement(id) {
    for (let item of toDoLists) {
        if (item.id === Number(id)) {
            toDoLists.splice(toDoLists.indexOf(item), 1);
            localStorage.setItem("toDoList", JSON.stringify(toDoLists));
            break;
        }
    }
}

viewTodoList();