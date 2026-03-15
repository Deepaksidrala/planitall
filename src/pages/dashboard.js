import { createHeader } from "../components/header.js";
import { getUser } from "../store/appStore.js";

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

  container.appendChild(header);
  container.appendChild(welcomeMessage);

  return container;
}