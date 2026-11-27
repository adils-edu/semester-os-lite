// id 240116068, 240116058
// Nuraiym Mukhambetova, Adil Seisagatov
//storage data adding
import {
  createInitialData,
  DEFAULT_SETTINGS
} from "./data.js";

const STORAGE_KEY = "semester-os-lite:data:v1";

export function saveData(data) {
  try {
    const json = JSON.stringify(data);

    localStorage.setItem(STORAGE_KEY, json);

    return true;
  } catch (error) {
    console.error("Failed to save data:", error);

    return false;
  }
}


export function loadData() {
  try {
    const savedJson = localStorage.getItem(STORAGE_KEY);

    if (savedJson === null) {
      return createInitialData();
    }

    const data = JSON.parse(savedJson);

    if (
      !data ||
      typeof data !== "object" ||
      Array.isArray(data) ||
      data.schemaVersion !== 1 ||
      !Array.isArray(data.events) ||
      !Array.isArray(data.tasks) ||
      !Array.isArray(data.scheduleBlocks) ||
      !data.settings ||
      typeof data.settings !== "object" ||
      Array.isArray(data.settings)
    ) {
      throw new Error("Invalid saved data structure");
    }

    return {
      ...data,

      settings: {
        ...DEFAULT_SETTINGS,
        ...data.settings
      }
    };
  } catch (error) {
    console.error("Failed to load data:", error);

    return createInitialData();
  }
}
settings: {
  ...DEFAULT_SETTINGS,
  ...data.settings
}
