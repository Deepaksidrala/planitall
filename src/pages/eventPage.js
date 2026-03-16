import { createHeader } from "../components/header.js";
import { getCurrentEvent } from "../features/events/eventStore.js";

export function renderEventPage() {
  const container = document.createElement("div");
  container.className = "event-page";

  const header = createHeader(
    "Event Details",
    "Manage your event"
  );

  const event = getCurrentEvent();

  const eventTitle = document.createElement("h2");
  eventTitle.textContent = event ? event.name : "No Event Selected";

  const placeholder = document.createElement("p");
  placeholder.textContent = "Event management features coming soon.";

  container.appendChild(header);
  container.appendChild(eventTitle);
  container.appendChild(placeholder);

  return container;
}