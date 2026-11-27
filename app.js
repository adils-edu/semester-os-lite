
import {
  EVENT_TYPES,
  PRIORITIES,
  createEvent,
  createTask
} from "./js/data.js";

import {
  getState,
  updateState,
  resetState,
  subscribe
} from "./js/state.js";


const testButton = document.querySelector("#test-button");
const statusMessage = document.querySelector("#status-message");

const resetButton = document.querySelector("#reset-button");
const dataSummary = document.querySelector("#data-summary");

function renderSummary() {
  const data = getState();

  dataSummary.textContent =
    `Events: ${data.events.length} | ` +
    `Tasks: ${data.tasks.length}`;
}

subscribe(renderSummary);

renderSummary();



testButton.addEventListener("click", () => {
  const saved = updateState((data) => {
    const event = createEvent({
      title: "Demo: Computer Networks",
      type: EVENT_TYPES.FIXED,
      start: "2026-11-25T09:30",
      end: "2026-11-25T11:20"
    });

    const task = createTask({
      title: "Demo: Statistics Quiz",
      priority: PRIORITIES.HIGH,
      deadline: "2026-11-28T18:00",
      estimatedMinutes: 120
    });

    data.events.push(event);
    data.tasks.push(task);
  });

  statusMessage.textContent = saved
    ? "Demo data saved successfully!"
    : "Data added, but browser storage failed.";
});


resetButton.addEventListener("click", () => {
  const confirmed = window.confirm(
    "Delete all local demo data?"
  );

  if (!confirmed) {
    return;
  }

  const saved = resetState();

  statusMessage.textContent = saved
    ? "Demo data reset successfully!"
    : "Data reset, but browser storage failed.";
});
