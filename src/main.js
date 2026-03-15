// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
// import

// import { createHeader } from "./components/header";
// const header=createHeader();
// document.body.appendChild(header);
// console.log("PLANItAll ready")


// import "./styles/main.css";
// import { createHeader } from "./components/header.js";

// const header = createHeader();
// document.body.appendChild(header);

// console.log("PlanItAll ready");

// import "./styles/main.css";
// import { createHeader } from "./components/header.js";

// const app = document.getElementById("app");

// const header = createHeader(
//   "PlanItAll",
//   "Organize your life. Execute your plans."
// );

// app.appendChild(header);

// console.log("PlanItAll ready");

import "./styles/main.css";
import { renderLandingPage } from "./pages/landingPage.js";

const app = document.getElementById("app");

const landingPage = renderLandingPage();

app.appendChild(landingPage);

console.log("PlanItAll ready");