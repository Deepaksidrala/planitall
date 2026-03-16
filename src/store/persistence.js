const STORAGE_KEY = "planitall_app_state";

export function saveState(state) {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch (error) {
    console.error("Error saving state:", error);
  }
}

export function loadState() {
  try {
    const serialized = localStorage.getItem(STORAGE_KEY);

    if (!serialized) {
      return null;
    }

    return JSON.parse(serialized);
  } catch (error) {
    console.error("Error loading state:", error);
    return null;
  }
}