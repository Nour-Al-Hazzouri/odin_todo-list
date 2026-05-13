import { main } from "../../universalQueries.js";
import createTaskForm from "./createTaskForm.js";

const taskDialog = document.createElement("dialog");
const closeTaskDialog = document.createElement("button");

function appendTaskDialog() {
  const taskForm = createTaskForm();
  closeTaskDialog.textContent = "X";
  closeTaskDialog.classList.add("close-btn");
  taskDialog.append(closeTaskDialog, taskForm);
  main.append(taskDialog);
}

function manipulateTaskDialog() {
  taskDialog.showModal();
  closeTaskDialog.addEventListener("click", () => {
    taskDialog.close();
  });
}

export { appendTaskDialog, manipulateTaskDialog };
