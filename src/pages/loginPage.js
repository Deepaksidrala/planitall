import { createHeader } from "../components/header.js";

export function renderLoginPage() {
  const container = document.createElement("div");
  container.className = "login-page";

  const header = createHeader(
    "PlanItAll",
    "Organize your life. Execute your plans."
  );

  const message = document.createElement("h2");
  message.textContent = "Login Page (coming soon)";

  container.appendChild(header);
  container.appendChild(message);

  return container;
}