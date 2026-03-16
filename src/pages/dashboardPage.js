// import { createHeader } from "../components/header.js";
// import { getUser } from "../store/appStore.js";

// export function renderDashboardPage() {
//   const container = document.createElement("div");
//   container.className = "dashboard-page";

//   const header = createHeader(
//     "PlanItAll Dashboard",
//     "Manage your events and tasks"
//   );

//   const user = getUser();

//   const welcomeMessage = document.createElement("h2");
//   welcomeMessage.textContent = `Welcome ${user ? user.name : "Guest"}`;

//   container.appendChild(header);
//   container.appendChild(welcomeMessage);

//   return container;
// }


// import { createHeader } from "../components/header.js";
// import { getUser } from "../store/appStore.js";
// import { createEventButton } from "../features/events/createEventButton.js";

// export function renderDashboardPage() {
//   const container = document.createElement("div");
//   container.className = "dashboard-page";

//   const header = createHeader(
//     "PlanItAll Dashboard",
//     "Manage your events and tasks"
//   );

//   const user = getUser();

//   const welcomeMessage = document.createElement("h2");
//   welcomeMessage.textContent = `Welcome ${user ? user.name : "Guest"}`;

//   const createEventBtn = createEventButton();

//   container.appendChild(header);
//   container.appendChild(welcomeMessage);
//   container.appendChild(createEventBtn);

//   return container;
// }


// import { createHeader } from "../components/header.js";
// import { getUser } from "../store/appStore.js";

// import { createEventButton } from "../features/events/createEventButton.js";
// import { getEvents } from "../features/events/eventStore.js";
// import { createEventList } from "../features/events/eventList.js";

// export function renderDashboardPage() {
//   const container = document.createElement("div");
//   container.className = "dashboard-page";

//   const header = createHeader(
//     "PlanItAll Dashboard",
//     "Manage your events and tasks"
//   );

//   const user = getUser();

//   const welcomeMessage = document.createElement("h2");
//   welcomeMessage.textContent = `Welcome ${user ? user.name : "Guest"}`;

//   const createEventBtn = createEventButton();

//   const events = getEvents();
//   const eventList = createEventList(events);

//   container.appendChild(header);
//   container.appendChild(welcomeMessage);
//   container.appendChild(createEventBtn);
//   container.appendChild(eventList);

//   return container;
// }

// import { createHeader } from "../components/header.js";
// import { getUser } from "../store/appStore.js";
// import { navigate } from "../utils/navigate.js";

// import { createEventButton } from "../features/events/createEventButton.js";
// import { getEvents } from "../features/events/eventStore.js";
// import { createEventList } from "../features/events/eventList.js";

// export function renderDashboardPage() {
//   const container = document.createElement("div");
//   container.className = "dashboard-page";

//   const header = createHeader(
//     "PlanItAll Dashboard",
//     "Manage your events and tasks"
//   );

//   const user = getUser();

//   const welcomeMessage = document.createElement("h2");
//   welcomeMessage.textContent = `Welcome ${user ? user.name : "Guest"}`;

//   const createEventBtn = createEventButton(() => {
//     navigate(renderDashboardPage);
//   });

//   const events = getEvents();
//   const eventList = createEventList(events);

//   container.appendChild(header);
//   container.appendChild(welcomeMessage);
//   container.appendChild(createEventBtn);
//   container.appendChild(eventList);

//   return container;
// }


import { createHeader } from "../components/header.js";
import { getUser } from "../store/appStore.js";
import { navigate } from "../utils/navigate.js";

import { createEventButton } from "../features/events/createEventButton.js";
import { getEvents, setCurrentEvent } from "../features/events/eventStore.js";
import { createEventList } from "../features/events/eventList.js";

import { renderEventPage } from "./eventPage.js";

export function renderDashboardPage() {
  const container = document.createElement("div");
  container.className = "dashboard-page";

  const header = createHeader(
    "PlanItAll Dashboard",
    "Manage your events and tasks"
  );

  const user = getUser();

  const welcomeMessage = document.createElement("h2");
  welcomeMessage.textContent = `Welcome ${user ? user.name : "Guest"}`;

  const createEventBtn = createEventButton(() => {
    navigate(renderDashboardPage);
  });

  const events = getEvents();

  const eventList = createEventList(events, (event) => {
    setCurrentEvent(event);
    navigate(renderEventPage);
  });

  container.appendChild(header);
  container.appendChild(welcomeMessage);
  container.appendChild(createEventBtn);
  container.appendChild(eventList);

  return container;
}