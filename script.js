document.getElementById("task-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission

    // Get user input
    var taskInput = document.getElementById("task").value;
    var descriptionInput = document.getElementById("description").value;
    var deadlineInput = document.getElementById("deadline").value;

    // // Create a new task option for the dropdown
    // var taskOption = document.createElement("option");
    // taskOption.textContent = taskInput;
    // document.getElementById("task-select").appendChild(taskOption);

    // Create a new task item
    var taskItem = document.createElement("li");
    taskItem.textContent = taskInput + " (Deadline: " + deadlineInput + ")";

    // Check if the task is completed, ongoing, or overdue
    var currentDate = new Date();
    var selectedDate = new Date(deadlineInput);
    if (selectedDate < currentDate) {
        taskItem.classList.add("overdue");
        document.getElementById("overdue-task-list").appendChild(taskItem);
    } else if (selectedDate > currentDate) {
        taskItem.classList.add("ongoing");
        document.getElementById("ongoing-task-list").appendChild(taskItem);
    } else {
        taskItem.classList.add("completed");
        document.getElementById("completed-task-list").appendChild(taskItem);
    }

    // Reset form inputs
    document.getElementById("task").value = "";
    document.getElementById("description").value = "";
    document.getElementById("deadline").value = "";
});

function showTaskDetails() {
    var selectedTask = document.getElementById("task-select").value;
    var taskDescription = "Task description not found.";

    // Retrieve the task description based on the selected task
    if (selectedTask !== "") {
        var taskOptions = document.getElementById("task-select").options;
        for (var i = 0; i < taskOptions.length; i++) {
            if (taskOptions[i].value === selectedTask) {
                taskDescription = document.getElementById("description").value;
                break;
            }
        }
    }

    document.getElementById("task-description").textContent = taskDescription;
}
