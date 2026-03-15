const state = {
  user: null,
  events: [],
  currentEvent: null
};

export function setUser(user) {
  state.user = user;
}

export function getUser() {
  return state.user;
}

export function getState() {
  return state;
}