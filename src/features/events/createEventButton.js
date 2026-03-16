import { addEvent } from "./eventStore.js";

export function createEventButton() {
  const button = document.createElement("button");
  button.textContent = "Create Event";

  button.addEventListener("click", () => {
    const event = addEvent("Birthday Party");
    console.log("Event created:", event);
  });

  return button;
}