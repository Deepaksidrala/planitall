// import { createHeader } from "../components/header.js";

// export function renderLandingPage() {
//   const container = document.createElement("div");
//   container.className = "landing-page";

//   const header = createHeader(
//     "PlanItAll",
//     "Organize your life. Execute your plans."
//   );

//   container.appendChild(header);

//   return container;
// }

// import { createHeader } from "../components/header.js";
// import { createHeroSection } from "../components/heroSection.js";

// export function renderLandingPage() {
//   const container = document.createElement("div");
//   container.className = "landing-page";

//   const header = createHeader(
//     "PlanItAll",
//     "Organize your life. Execute your plans."
//   );

//   const heroSection = createHeroSection();

//   container.appendChild(header);
//   container.appendChild(heroSection);

//   return container;
// }

// import { createHeader } from "../components/header.js";
// import { createHeroSection } from "../components/heroSection.js";

// export function renderLandingPage() {
//   const container = document.createElement("div");
//   container.className = "landing-page";

//   const header = createHeader(
//     "PlanItAll",
//     "Organize your life. Execute your plans."
//   );

//   const heroSection = createHeroSection(() => {
//     console.log("Get Started clicked");
//   });

//   container.appendChild(header);
//   container.appendChild(heroSection);

//   return container;
// }

import { createHeader } from "../components/header.js";
import { createHeroSection } from "../components/heroSection.js";
import { navigate } from "../utils/navigate.js";
import { renderLoginPage } from "./loginPage.js";

export function renderLandingPage() {
  const container = document.createElement("div");
  container.className = "landing-page";

  const header = createHeader(
    "PlanItAll",
    "Organize your life. Execute your plans."
  );

  const heroSection = createHeroSection(() => {
    navigate(renderLoginPage);
  });

  container.appendChild(header);
  container.appendChild(heroSection);

  return container;
}