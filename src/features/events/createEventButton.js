// import { addEvent } from "./eventStore.js";

// export function createEventButton() {
//   const button = document.createElement("button");
//   button.textContent = "Create Event";

//   button.addEventListener("click", () => {
//     const event = addEvent("Birthday Party");
//     console.log("Event created:", event);
//   });

//   return button;
// }

import { addEvent } from "./eventStore.js";

export function createEventButton(onCreateEvent) {
  const button = document.createElement("button");
  button.textContent = "Create Event";

  button.addEventListener("click", () => {
    // add dummy event
    addEvent("Birthday Party");

    // trigger re-render callback
    if (onCreateEvent) {
      onCreateEvent();
    }
  });

  return button;
}