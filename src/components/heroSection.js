export function createHeroSection() {
  const section = document.createElement("section");

  const title = document.createElement("h2");
  title.textContent = "Plan events effortlessly";

  const description = document.createElement("p");
  description.textContent =
    "Manage tasks, budgets and vendors in one place.";

  const button = document.createElement("button");
  button.textContent = "Get Started";

  section.appendChild(title);
  section.appendChild(description);
  section.appendChild(button);

  return section;
}