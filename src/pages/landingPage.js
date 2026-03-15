import { createHeader } from "../components/header.js";

export function renderLandingPage() {
  const container = document.createElement("div");
  container.className = "landing-page";

  const header = createHeader(
    "PlanItAll",
    "Organize your life. Execute your plans."
  );

  container.appendChild(header);

  return container;
}