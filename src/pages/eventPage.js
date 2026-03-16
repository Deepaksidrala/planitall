// import { createHeader } from "../components/header.js";
// import { getCurrentEvent } from "../features/events/eventStore.js";

// export function renderEventPage() {
//   const container = document.createElement("div");
//   container.className = "event-page";

//   const header = createHeader(
//     "Event Details",
//     "Manage your event"
//   );

//   const event = getCurrentEvent();

//   const eventTitle = document.createElement("h2");
//   eventTitle.textContent = event ? event.name : "No Event Selected";

//   const placeholder = document.createElement("p");
//   placeholder.textContent = "Event management features coming soon.";

//   container.appendChild(header);
//   container.appendChild(eventTitle);
//   container.appendChild(placeholder);

//   return container;
// }


import { createHeader } from "../components/header.js";
import { getCurrentEvent } from "../features/events/eventStore.js";
import { navigate } from "../utils/navigate.js";

import { createTaskInput } from "../features/tasks/createTaskInput.js";
import { getTasks } from "../features/tasks/taskStore.js";
import { createTaskList } from "../features/tasks/taskList.js";

import { renderEventPage } from "./eventPage.js";

export function renderEventPage() {
  const container = document.createElement("div");
  container.className = "event-page";

  const header = createHeader(
    "Event Details",
    "Manage your event tasks"
  );

  const event = getCurrentEvent();

  const eventTitle = document.createElement("h2");
  eventTitle.textContent = event ? event.name : "No Event Selected";

  const taskInput = createTaskInput(() => {
    navigate(renderEventPage);
  });

  const tasks = getTasks();
  const taskList = createTaskList(tasks, () => {
    navigate(renderEventPage);
  });

  container.appendChild(header);
  container.appendChild(eventTitle);
  container.appendChild(taskInput);
  container.appendChild(taskList);

  return container;
}