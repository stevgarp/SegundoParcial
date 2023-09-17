//TaskList.js
import { ModuleTaskList} from "../../modules/Agregator.js";

const { addTask, completeTask, getTasks, deleteCompletedTasks, deleteTask } = ModuleTaskList;

function displayTasks() {
  const tasksTable = document.getElementById('tasks-table');
  tasksTable.innerHTML = '';

  const tasks = getTasks();

  tasks.forEach((task) => {
    const row = document.createElement('tr');

    const taskTextCell = document.createElement('td');
    taskTextCell.innerText = task.text;

    const completedCell = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      completeTask(task.id);
      displayTasks();
    });
    completedCell.appendChild(checkbox);

    const actionsCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Eliminar';
    deleteButton.addEventListener('click', () => {
      deleteTask(task.id);
      displayTasks();
    });
    actionsCell.appendChild(deleteButton);

    row.appendChild(taskTextCell);
    row.appendChild(completedCell);
    row.appendChild(actionsCell);

    tasksTable.appendChild(row);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-button');
  const taskInput = document.getElementById('task-input');
  const deleteCompletedButton = document.getElementById('delete-completed-button');

  addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      addTask(taskText);
      taskInput.value = '';
      displayTasks();
    }
  });

  deleteCompletedButton.addEventListener('click', () => {
    deleteCompletedTasks();
    displayTasks();
  });

  displayTasks();
});