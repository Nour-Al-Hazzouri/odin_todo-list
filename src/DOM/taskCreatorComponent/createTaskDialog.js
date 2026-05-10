import { main } from "../../universalQueries.js";
import createTaskForm from "./createTaskForm.js";

const taskDialog = document.createElement("dialog");
const closeTaskDialog = document.createElement("button");

function appendTaskDialog() {
  const taskForm = createTaskForm();
  const taskModal = document.querySelector("#task-modal");
  closeTaskDialog.textContent = "X";
  closeTaskDialog.id = "close-task";
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
