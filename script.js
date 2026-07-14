let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

document.getElementById("addBtn").addEventListener("click", addTask);

document.getElementById("taskInput").addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        addTask();
    }

});

function addTask() {

    let task = document.getElementById("taskInput").value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        text: task,
        completed: false
    });

    saveTasks();

    renderTasks();

    document.getElementById("taskInput").value = "";

}

function renderTasks() {

    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        let li = document.createElement("li");

        li.textContent = tasks[i].text;

        if (tasks[i].completed) {
            li.classList.add("completed");
        }

        li.addEventListener("click", function () {

            tasks[i].completed = !tasks[i].completed;

            saveTasks();

            renderTasks();

        });

        let deleteBtn = document.createElement("button");

        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function (event) {

            event.stopPropagation();

            tasks.splice(i, 1);

            saveTasks();

            renderTasks();

        });

        li.appendChild(deleteBtn);

        taskList.appendChild(li);

    }

}

function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

renderTasks();