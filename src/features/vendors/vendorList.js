export function createVendorList(vendors) {
  const list = document.createElement("ul");

  vendors.forEach((vendor) => {
    const item = document.createElement("li");

    item.textContent =
      `${vendor.name} - ${vendor.type} - ${vendor.phone}`;

    list.appendChild(item);
  });

  return list;
}