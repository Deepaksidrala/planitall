// const state = {
//   user: null,
//   events: [],
//   currentEvent: null
// };

// export function setUser(user) {
//   state.user = user;
// }

// export function getUser() {
//   return state.user;
// }

// export function getState() {
//   return state;
// }

import { saveState, loadState } from "./persistence.js";

const initialState = {
  user: null,
  events: [],
  currentEvent: null
};

const persistedState = loadState();

const state = persistedState || initialState;

export function getState() {
  return state;
}

export function setUser(user) {
  state.user = user;
  saveState(state);
}

export function getUser() {
  return state.user;
}

export function clearUser() {
  state.user = null;
  saveState(state);
}