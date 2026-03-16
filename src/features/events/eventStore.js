import { getState } from "../../store/appStore.js";

export function addEvent(eventName) {
  const state = getState();

  const newEvent = {
    id: Date.now(),
    name: eventName
  };

  state.events.push(newEvent);

  return newEvent;
}

export function getEvents() {
  const state = getState();
  return state.events;
}

export function setCurrentEvent(event) {
  const state = getState();
  state.currentEvent = event;
}

export function getCurrentEvent() {
  const state = getState();
  return state.currentEvent;
}