export function createEventList(events) {
  const list = document.createElement("ul");

  events.forEach((event) => {
    const listItem = document.createElement("li");
    listItem.textContent = event.name;
    list.appendChild(listItem);
  });

  return list;
}