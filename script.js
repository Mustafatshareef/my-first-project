document.getElementById("addBtn").addEventListener("click", function() {

    if (document.getElementById("taskInput").value === "") {
        alert("Please enter a task!");
        return;
    }
    console.log(document.getElementById("taskInput").value);
    let task = document.getElementById("taskInput").value;
    let li = document.createElement("li");
    li.innerHTML = task;
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
});
