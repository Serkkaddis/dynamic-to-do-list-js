document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get the task input value

        if (taskText === "") {
            alert("Please enter a task."); // Alert if the input is empty
            return;
        }

        const listItem = document.createElement('li'); // Create a new list item
        listItem.textContent = taskText; // Set its text content

        const removeButton = document.createElement('button'); // Create a remove button
        removeButton.textContent = "Remove"; // Set button text
        removeButton.className = 'remove-btn'; // Assign a class for styling

        // Attach click event to remove the task
        removeButton.onclick = () => {
            listItem.classList.add('fade-out');
            setTimeout(() => {
                taskList.removeChild(listItem); // Remove the list item after the fade-out
            }, 300);
        };

        listItem.appendChild(removeButton); // Append the remove button to the list item
        taskList.appendChild(listItem); // Append the list item to the task list

        taskInput.value = ''; // Clear the input field
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on pressing Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Call addTask if Enter is pressed
        }
    });
});
