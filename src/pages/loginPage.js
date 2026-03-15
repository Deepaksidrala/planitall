// import { createHeader } from "../components/header.js";

// export function renderLoginPage() {
//   const container = document.createElement("div");
//   container.className = "login-page";

//   const header = createHeader(
//     "PlanItAll",
//     "Organize your life. Execute your plans."
//   );

//   const message = document.createElement("h2");
//   message.textContent = "Login Page (coming soon)";

//   container.appendChild(header);
//   container.appendChild(message);

//   return container;
// }


import { createHeader } from "../components/header.js";
import { navigate } from "../utils/navigate.js";
import { setUser } from "../store/appStore.js";
import { renderDashboardPage } from "./dashboardPage.js";

export function renderLoginPage() {
  const container = document.createElement("div");
  container.className = "login-page";

  const header = createHeader(
    "PlanItAll",
    "Organize your life. Execute your plans."
  );

  const title = document.createElement("h2");
  title.textContent = "Login Page (coming soon)";

  const loginButton = document.createElement("button");
  loginButton.textContent = "Login";

  loginButton.addEventListener("click", () => {
    // simulate login
    setUser({
      name: "Demo User"
    });

    navigate(renderDashboardPage);
  });

  container.appendChild(header);
  container.appendChild(title);
  container.appendChild(loginButton);

  return container;
}