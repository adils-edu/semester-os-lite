
import {
  EVENT_TYPES,
  PRIORITIES,
  createInitialData,
  createEvent,
  createTask
} from "./js/data.js";


const testButton = document.querySelector("#test-button");
const statusMessage = document.querySelector("#status-message");


testButton.addEventListener("click", () => {
  const demoData = createInitialData();

  const event = createEvent({
    title: "Computer Networks",
    type: EVENT_TYPES.FIXED,
    start: "2026-11-25T09:30",
    end: "2026-11-25T11:20"
  });

  const task = createTask({
    title: "Prepare for Statistics Quiz",
    priority: PRIORITIES.HIGH,
    deadline: "2026-11-28T18:00",
    estimatedMinutes: 120
  });

  demoData.events.push(event);
  demoData.tasks.push(task);

  console.log("Semester OS Data:", demoData);

  statusMessage.textContent =
    `Data model OK! Events: ${demoData.events.length}, ` +
    `Tasks: ${demoData.tasks.length}`;
});

