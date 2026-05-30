import checkReturnedObject from "../../../checkers/checkReturnedObject.js";
import { main } from "../../../universalQueries.js";
import removeAllChildNodes from "../../removeChildren.js";
import {
  refreshCreateListItems,
  refreshListItems,
  refreshListsOptions,
  refreshListsRemovedTasks,
} from "../../sidebarComponent/sidebarRefreshComponents.js";
import createListOptionsForm from "./listOptionsForm.js";
import {
  deleteObject,
  getTodoObjects,
} from "../../../objectsComponents/centralObjectsStorage.js";
import { removeFromList } from "../../../objectsComponents/objectsManipulation.js";
import removeMainSections from "../../removeMainSections.js";

function renderListOptions(id) {
  removeMainSections();
  const returnedObject = checkReturnedObject(id, "list");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete List";
  if (
    returnedObject.Name === "Default" ||
    returnedObject.Name === "Today" ||
    returnedObject.Name === "This Week" ||
    returnedObject.Name === "Completed"
  ) {
    deleteButton.disabled = true;
  }
  const listOptionsSection = document.createElement("section");
  listOptionsSection.id = "list-options";
  const listH1 = document.createElement("h1");
  listH1.textContent = "List Options";
  const listForm = createListOptionsForm(id);
  listOptionsSection.append(listH1, listForm, deleteButton);
  deleteButton.onclick = function () {
    deleteObject(returnedObject);
    removeMainSections();
    refreshListItems();
  };
  main.append(listOptionsSection);
}

function renderTaskOptions(id) {
  clearMainSection();
  const taskOptionsSection = document.createElement("section");
  taskOptionsSection.id = "task-options";
  const taskH1 = document.createElement("h1");
  taskH1.textContent = "Task Options";
  const taskForm = createTaskOptionsForm(id);
  taskOptionsSection.append(taskH1, taskForm);
  main.append(taskOptionsSection);
}

function removeSelectedTasks(passedList, formData) {
  let selectedObject;
  for (let i = 0; i < formData.length; i++) {
    selectedObject = checkReturnedObject(formData[i], "todo");
    removeFromList(passedList, selectedObject);
  }
  refreshCreateListItems();
}

export { renderListOptions, renderTaskOptions, removeSelectedTasks };
