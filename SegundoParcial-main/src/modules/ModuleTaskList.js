const tasks = [];

function addTask(taskText) {
  const task = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };
  tasks.push(task);
}

function completeTask(taskId) {
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.completed = true;
  }
}

function getTasks() {
  return tasks;
}

export { addTask, completeTask, getTasks };