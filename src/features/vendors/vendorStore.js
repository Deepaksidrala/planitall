import { getCurrentEvent } from "../events/eventStore.js";

export function addVendor(name, type, phone) {
  const event = getCurrentEvent();
  if (!event) return;

  if (!event.vendors) {
    event.vendors = [];
  }

  const newVendor = {
    id: Date.now(),
    name,
    type,
    phone
  };

  event.vendors.push(newVendor);

  return newVendor;
}

export function getVendors() {
  const event = getCurrentEvent();

  if (!event || !event.vendors) {
    return [];
  }

  return event.vendors;
}