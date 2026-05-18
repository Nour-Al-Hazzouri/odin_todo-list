import { main } from "../../universalQueries.js";
import removeAllChildNodes from "../removeChildren.js";
import { refreshListsOptions } from "../sidebarComponent/sidebarRefreshComponents.js";
import createListOptionsForm from "./listOptionsForm.js";
import createTaskOptionsForm from "./taskOptionsForm.js";

function renderListOptions(id) {
  const taskOptionsSection = document.querySelector("section#task-options");
  if (taskOptionsSection) {
    taskOptionsSection.remove();
  }
  const listOptionsSection = document.createElement("section");
  listOptionsSection.id = "list-options";
  const listH1 = document.createElement("h1");
  listH1.textContent = "List Options";
  const listForm = createListOptionsForm(id);
  listOptionsSection.append(listH1, listForm);
  main.append(listOptionsSection);
}

function renderTaskOptions(id) {
  const listOptionsSection = document.querySelector("section#list-options");
  if (listOptionsSection) {
    listOptionsSection.remove();
  }
  const taskOptionsSection = document.createElement("section");
  taskOptionsSection.id = "task-options";
  const taskH1 = document.createElement("h1");
  taskH1.textContent = "Task Options";
  const taskForm = createTaskOptionsForm(id);
  taskOptionsSection.append(taskH1, taskForm);
  main.append(taskOptionsSection);
}

export { renderListOptions, renderTaskOptions };
