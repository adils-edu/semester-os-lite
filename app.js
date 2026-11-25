
/*
Student Names: [Full names]
Student IDs: [Student IDs]
Course: PED 379 — Web Programming
Section: [Section number]
Assignment: Midterm 2 Project
*/

const testButton = document.querySelector("#test-button");
const statusMessage = document.querySelector("#status-message");

testButton.addEventListener("click", () => {
  statusMessage.textContent = "JavaScript is working!";
});
