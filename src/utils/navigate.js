import { render } from "./render.js";

const app = document.getElementById("app");

export function navigate(pageFactory) {
  const page = pageFactory();
  render(app, page);
}