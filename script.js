document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage
    loadTasks();

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // Load existing tasks
        }

    // Function to add a task
    function addTask(taskText, save = true) {
        if (save && taskText) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        const listItem = document.createElement('li'); // Create a new list item
        listItem.textContent = taskText; // Set its text content

        const removeButton = document.createElement('button'); // Create a remove button
        removeButton.textContent = "Remove"; // Set button text
        removeButton.className = 'remove-btn'; // Assign a class for styling

        // Attach click event to remove the task
        removeButton.onclick = () => {
            const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = tasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Update Local Storage
            listItem.classList.add('fade-out');
            setTimeout(() => {
                taskList.removeChild(listItem); // Remove the list item after fade-out
            }, 300);
        };

        listItem.appendChild(removeButton); // Append the remove button to the list item
        taskList.appendChild(listItem); // Append the list item to the task list

        taskInput.value = ''; // Clear the input field
    }

    // Add task on button click
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim(); // Get the task input value
        if (taskText) {
            addTask(taskText); // Call addTask with the task text
        } else {
            alert("Please enter a task."); // Alert if the input is empty
        }
    });

    // Add task on pressing Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText) {
                addTask(taskText); // Call addTask if Enter is pressed
            } else {
                alert("Please enter a task.");
            }
        }
    });
});
