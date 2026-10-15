const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("prioritySelect");
const taskList = document.getElementById("taskList");
const themeToggle = document.getElementById("themeToggle");

const STORAGE_KEY = "tasks";
const VALID_PRIORITIES = new Set(["High", "Medium", "Low"]);

function loadTasks() {
    try {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        if (!Array.isArray(stored)) return [];

        return stored
            .filter((task) => task && typeof task.text === "string")
            .map((task) => ({
                text: task.text.slice(0, 500),
                priority: VALID_PRIORITIES.has(task.priority) ? task.priority : "Medium",
                completed: Boolean(task.completed)
            }));
    } catch {
        return [];
    }
}

let tasks = loadTasks();

function saveTasks() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
        console.warn("Tasks could not be saved in this browser.", error);
    }
}

function renderTasks() {
    taskList.replaceChildren();

    tasks.forEach((task, index) => {
        const item = document.createElement("li");
        item.dataset.index = String(index);
        if (task.completed) item.classList.add("completed");

        const content = document.createElement("span");
        content.className = "task-content";
        content.append(document.createTextNode(task.text));

        const priority = document.createElement("span");
        priority.className = `priority ${task.priority.toLowerCase()}`;
        priority.textContent = task.priority;
        content.appendChild(priority);

        const actions = document.createElement("div");
        actions.className = "actions";

        const completeButton = document.createElement("button");
        completeButton.type = "button";
        completeButton.dataset.action = "toggle";
        completeButton.setAttribute("aria-label", task.completed ? "Mark task active" : "Mark task complete");
        completeButton.textContent = "✔";

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.dataset.action = "delete";
        deleteButton.setAttribute("aria-label", "Delete task");
        deleteButton.textContent = "🗑";

        actions.append(completeButton, deleteButton);
        item.append(content, actions);
        taskList.appendChild(item);
    });

    saveTasks();
}

function addTask() {
    const text = taskInput.value.trim();
    if (!text) {
        taskInput.focus();
        return;
    }

    const selectedPriority = VALID_PRIORITIES.has(prioritySelect.value)
        ? prioritySelect.value
        : "Medium";

    tasks.push({ text, priority: selectedPriority, completed: false });
    taskInput.value = "";
    renderTasks();
    taskInput.focus();
}

taskList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const item = button.closest("li[data-index]");
    if (!item) return;

    const index = Number(item.dataset.index);
    if (!Number.isInteger(index) || index < 0 || index >= tasks.length) return;

    if (button.dataset.action === "toggle") {
        tasks[index].completed = !tasks[index].completed;
    } else if (button.dataset.action === "delete") {
        tasks.splice(index, 1);
    } else {
        return;
    }

    renderTasks();
});

taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") addTask();
});

themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    themeToggle.textContent = isDark ? "☀" : "🌙";
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
});

renderTasks();
