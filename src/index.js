document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form");
const input = document.querySelector("#new-task-description");

form.addEventListener("submit", event => {
  event.preventDefault();
  const task = input.value;
  const taskNode = document.createElement("li");
  taskNode.textContent = task;
  document.querySelector("ul").appendChild(taskNode);
});
});
