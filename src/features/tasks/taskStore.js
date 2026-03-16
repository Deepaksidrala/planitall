import { getCurrentEvent } from "../events/eventStore.js";

export function addTask(taskTitle) {
  const event = getCurrentEvent();

  if (!event) return;

  if (!event.tasks) {
    event.tasks = [];
  }

  const newTask = {
    id: Date.now(),
    title: taskTitle,
    completed: false
  };

  event.tasks.push(newTask);

  return newTask;
}

export function getTasks() {
  const event = getCurrentEvent();

  if (!event || !event.tasks) {
    return [];
  }

  return event.tasks;
}

export function toggleTask(taskId) {
  const event = getCurrentEvent();

  if (!event || !event.tasks) return;

  const task = event.tasks.find((t) => t.id === taskId);

  if (task) {
    task.completed = !task.completed;
  }
}