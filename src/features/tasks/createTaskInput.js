import { addTask } from "./taskStore.js";

export function createTaskInput(onTaskCreated) {
  const container = document.createElement("div");

  const input = document.createElement("input");
  input.placeholder = "Enter task...";

  const button = document.createElement("button");
  button.textContent = "Add Task";

  button.addEventListener("click", () => {
    const value = input.value.trim();

    if (!value) return;

    addTask(value);

    input.value = "";

    if (onTaskCreated) {
      onTaskCreated();
    }
  });

  container.appendChild(input);
  container.appendChild(button);

  return container;
}