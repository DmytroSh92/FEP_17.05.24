import '../style/main.scss';

const formEl = $(".form");
const contentEL = $(".js--todos-wrapper");
const updateEL = $("#save-task");
const URL = "http://localhost:2000/api/todo-list";

formEl.on("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    const title = $("#task-title").val();
    const description = $("#task-description").val();

    saveElement(title, description);
});

contentEL.on("click", "button.todo-item__delete", (event) => {
    const listItem = $(event.target).closest('.todo-item');
    const itemId = listItem.data('id');
    console.log(listItem)
    delElement(itemId);
});

contentEL.on("change", "input[type='checkbox']", (event) => {
    const listItem = $(event.target).closest('.todo-item');
    const itemId = listItem.data('id');
    const itemTitle = listItem.data('title');
    const itemDescription = listItem.data('description');
    let isDone = $(event.target).is(':checked');

    updateElement(itemId, { title: itemTitle, description: itemDescription, isDone: isDone });
});



contentEL.on("click", ".todo-item__description", async function() {
    const listItem = $(this).closest('.todo-item');
    const itemId = listItem.data('id');

    try {
        const response = await fetch(`${URL}/${itemId}`, {
            method: 'GET'
        });
        const task = await response.json();
        if (task) {
            $('#task-modal').find('.modal-title').text('Task Details');
            $('#task-modal').data('itemId', itemId);

            $('#form-task-title').val(task.title);
            $('#form-task-description').val(task.description);
            $('#form-task-done').prop('checked', task.isDone);

            $('#task-modal').modal('show');
        }
    } catch (error) {
        console.error('Error fetching todo:', error)
    }
});

updateEL.on("click", (event) => {
    const itemId = $('#task-modal').data('itemId');
    const updatedTask = {
        title: $('#form-task-title').val(),
        description: $('#form-task-description').val(),
        isDone: $('#form-task-done').is(':checked')
    };
    $('#task-modal').modal('hide');
    updateElement(itemId, updatedTask);
});

function renderWeatherInfo(data) {
    let listItemsHTML = "";
    for (let list of data) {
        listItemsHTML +=
            `<li class="todo-item" data-id=${list._id} data-title=${list.title} data-description=${list.description}>
                <input type="checkbox" ${list.isDone ? "checked" : ""}>
                <span class="todo-item__description ${list.isDone ? "todo-item--checked" : ""}">Title: ${list.title} <p>Description: ${list.description}</p> </span>
                <button class="todo-item__delete">Видалити</button>
            </li>`;
    }
    contentEL.html(listItemsHTML);
}

async function fetchAndProcessData() {
    try {
        let response = await fetch(URL);
        let data = await response.json();
        renderWeatherInfo(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function updateElement(itemId, updateItem) {
    try {
        const serializedItem = JSON.stringify(updateItem);
        const response = await fetch(`${URL}/${itemId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: serializedItem
        });
        const result = await response.json();
        console.log('TodoTask created:', result);
        fetchAndProcessData();
    } catch (error) {
        console.error('Error create todo:', error);
    }
}

async function delElement(id) {
    try {
        const response = await fetch(`${URL}/${id}`, {
            method: 'DELETE',
        });
        const result = await response.json();
        console.log('TodoTask deleted:', result);
        fetchAndProcessData();
    } catch (error) {
        console.error('Error deleting todo:', error);
    }
}

async function saveElement(title, description){
    try {
        const response = await fetch(`${URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description })
        });
        const result = await response.json();
        console.log('TodoTask created:', result);
        fetchAndProcessData();
    } catch (error) {
        console.error('Error create todo:', error);
    }
}

fetchAndProcessData();