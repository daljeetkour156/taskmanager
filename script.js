let tasks = [];

// Add Task
function addTask() {
  let input = document.getElementById("taskInput");
  let text = input.value;

  if (text == "") {
    alert("Enter a task");
    return;
  }

  let task = {
    title: text,
    completed: false,
  };

  tasks.push(task);
  input.value = "";

  showTasks();
}

// Show Tasks
function showTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(function (task, index) {
    list.innerHTML += `
            <div>
                <span>${task.title}</span>
                <button onclick="completeTask(${index})">
                    ${task.completed ? "Undo" : "Complete"}
                </button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
  });

  document.getElementById("pendingCount").innerText = tasks.filter(
    (task) => !task.completed,
  ).length;
}

// Complete Task
function completeTask(index) {
  tasks[index].completed = !tasks[index].completed;
  showTasks();
}

// Delete Task
function deleteTask(index) {
  tasks.splice(index, 1);
  showTasks();
}
