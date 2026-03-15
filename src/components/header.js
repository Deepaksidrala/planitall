// export function createHeader(){
//     const header=document.createElement('h1');
//     header.textContent='PLANITALL';
//     header.style.textAlign="center";
//     return header;
// }


// export function createHeader() {
//   const header = document.createElement("header");

//   const title = document.createElement("h1");
//   title.textContent = "PlanItAll";

//   const subtitle = document.createElement("p");
//   subtitle.textContent = "Organize your life. Execute your plans.";

//   header.appendChild(title);
//   header.appendChild(subtitle);

//   return header;
// }

export function createHeader(title, subtitle) {
  const header = document.createElement("header");

  const h1 = document.createElement("h1");
  h1.textContent = title;

  const sub = document.createElement("p");
  sub.textContent = subtitle;

  header.appendChild(h1);
  header.appendChild(sub);

  return header;
}