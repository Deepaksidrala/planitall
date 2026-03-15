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

import { createHeader } from "../components/header.js";
import { createHeroSection } from "../components/heroSection.js";

export function renderLandingPage() {
  const container = document.createElement("div");
  container.className = "landing-page";

  const header = createHeader(
    "PlanItAll",
    "Organize your life. Execute your plans."
  );

  const heroSection = createHeroSection();

  container.appendChild(header);
  container.appendChild(heroSection);

  return container;
}