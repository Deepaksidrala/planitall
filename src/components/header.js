// export function createHeader(){
//     const header=document.createElement('h1');
//     header.textContent='PLANITALL';
//     header.style.textAlign="center";
//     return header;
// }


export function createHeader() {
  const header = document.createElement("header");

  const title = document.createElement("h1");
  title.textContent = "PlanItAll";

  const subtitle = document.createElement("p");
  subtitle.textContent = "Organize your life. Execute your plans.";

  header.appendChild(title);
  header.appendChild(subtitle);

  return header;
}