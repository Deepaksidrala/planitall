// import { render } from "./render.js";

// const app = document.getElementById("app");

// export function navigate(pageFactory) {
//   const page = pageFactory();
//   render(app, page);
// }

import { render } from "./render.js";

const app = document.getElementById("app");

let currentPage = null;

export function navigate(pageFactory) {
  currentPage = pageFactory;

  const page = pageFactory();

  // push history entry
  history.pushState(
    { page: pageFactory.name },
    "",
    ""
  );

  render(app, page);
}

// listen for browser back / forward buttons
window.addEventListener("popstate", () => {
  if (currentPage) {
    const page = currentPage();
    render(app, page);
  }
});