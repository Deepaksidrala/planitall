export function render(rootElement, page) {
  // clear existing content
  rootElement.innerHTML = "";

  // append the new page
  rootElement.appendChild(page);
}