import { main } from "../../universalQueries.js";
import { refreshCreateTaskItems, refreshTaskItems } from "../sidebarComponent/sidebarRefreshComponents.js";
import createTaskForm from "./createTaskForm.js";

// Create tasks dialog elements
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
  refreshCreateTaskItems();
  taskDialog.showModal();
  closeTaskDialog.addEventListener("click", () => {
    taskDialog.close();
  });
}

export { appendTaskDialog, manipulateTaskDialog };
