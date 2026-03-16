import { addVendor } from "./vendorStore.js";

export function createVendorInput(onVendorAdded) {
  const container = document.createElement("div");

  const nameInput = document.createElement("input");
  nameInput.placeholder = "Vendor Name";

  const typeInput = document.createElement("input");
  typeInput.placeholder = "Vendor Type";

  const phoneInput = document.createElement("input");
  phoneInput.placeholder = "Phone Number";

  const button = document.createElement("button");
  button.textContent = "Add Vendor";

  button.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const type = typeInput.value.trim();
    const phone = phoneInput.value.trim();

    if (!name || !type || !phone) return;

    addVendor(name, type, phone);

    nameInput.value = "";
    typeInput.value = "";
    phoneInput.value = "";

    if (onVendorAdded) {
      onVendorAdded();
    }
  });

  container.appendChild(nameInput);
  container.appendChild(typeInput);
  container.appendChild(phoneInput);
  container.appendChild(button);

  return container;
}