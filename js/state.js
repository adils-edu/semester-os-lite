// id

import { createInitialData } from "./data.js";

import {
  loadData,
  saveData
} from "./storage.js";

let state = loadData();

const subscribers = new Set();


export function getState() {
  return structuredClone(state);
}


function commit(nextState) {
  state = nextState;

  const saved = saveData(state);

  subscribers.forEach((callback) => {
    callback(getState());
  });

  return saved;
}


export function updateState(changeFunction) {
  const nextState = getState();

  changeFunction(nextState);

  return commit(nextState);
}
updateState((data) => {
  data.tasks.push(newTask);
});

export function subscribe(callback) {
  subscribers.add(callback);

  return () => {
    subscribers.delete(callback);
  };
}

export function resetState() {
  return commit(createInitialData());
}


