import { toggleTask } from "./taskStore.js";

export function createTaskList(tasks, onTaskToggle) {
  const list = document.createElement("ul");

  tasks.forEach((task) => {
    const item = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    const text = document.createElement("span");
    text.textContent = ` ${task.title}`;

    checkbox.addEventListener("change", () => {
      toggleTask(task.id);

      if (onTaskToggle) {
        onTaskToggle();
      }
    });

    item.appendChild(checkbox);
    item.appendChild(text);

    list.appendChild(item);
  });

  return list;
}