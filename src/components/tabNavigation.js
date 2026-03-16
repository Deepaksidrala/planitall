export function createTabs(activeTab, onTabChange) {
  const container = document.createElement("div");

  const tabs = ["tasks", "budget", "vendors"];

  tabs.forEach((tab) => {
    const button = document.createElement("button");

    button.textContent =
      tab.charAt(0).toUpperCase() + tab.slice(1);

    if (tab === activeTab) {
      button.style.fontWeight = "bold";
    }

    button.addEventListener("click", () => {
      onTabChange(tab);
    });

    container.appendChild(button);
  });

  return container;
}