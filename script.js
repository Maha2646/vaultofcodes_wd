function addTask() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value.trim();
    taskInput.value = "";

    if (taskText === "") {
        return;
    }

    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = taskText;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);
}
