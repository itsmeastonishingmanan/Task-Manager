let tasks = [];

function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button onclick="toggleTask(${index})">Done</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById("task-input");
    const text = taskInput.value.trim();

    if (text !== "") {
        tasks.push({ text, completed: false });
        taskInput.value = "";
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Initial rendering
renderTasks();
