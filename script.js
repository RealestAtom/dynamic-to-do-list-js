// Ensure the script runs only after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a task
    function addTask() {
        // Retrieve text from input and trim whitespace
        let taskText = taskInput.value.trim();

        // Validate input
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Remove task when remove button is clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Add remove button to list item + append to task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Add click event listener to the Add Task button
    addButton.addEventListener("click", addTask);

    // Add Enter key event for adding a task
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Call addTask on DOMContentLoaded (per instructions)
    addTask();
});
