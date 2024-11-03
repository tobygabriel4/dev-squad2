document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
  
    // Add a new task
    taskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;
        taskList.appendChild(taskItem);
        taskInput.value = "";
      }
    });
  });
  
  function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
  }
  