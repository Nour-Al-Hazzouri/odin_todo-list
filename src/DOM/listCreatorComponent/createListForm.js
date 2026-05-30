import { getTodoObjects } from "../../objectsComponents/centralObjectsStorage.js";
import elementsCreate from "../elementsCreator.js";
import { setLabelAttributes } from "../toggleAttribute.js";
import {
  createListObject,
  createTodoObject,
} from "../../objectsComponents/createObjects.js";
import { refreshListItems } from "../sidebarComponent/sidebarRefreshComponents.js";
import { submitListForm } from "../sidebarComponent/sidebarFormsSubmitter.js";

const listForm = document.createElement("form");

function createListForm() {
  listForm.setAttribute("method", "dialog");
  const listLabel = document.createElement("label");
  const listInput = document.createElement("input");
  const tasksListLabel = document.createElement('h3');
  tasksListLabel.textContent = "Choose Tasks";
  tasksListLabel.classList.add("dialogs-h3");
  const tasksList = document.createElement("div");
  tasksList.classList.add("dialogs-list");
  const submitButton = document.createElement("button");
  const empty = document.createElement("p");
  
  listForm.id = "list-form";

  setLabelAttributes(listLabel, "Name", "name");

  listInput.id = "name";
  listInput.name = "name";
  listInput.setAttribute("type", "text");
  listInput.toggleAttribute("required");

  tasksList.setAttribute("id", "create-lists-div");

  submitButton.textContent = "Create List";
  submitButton.setAttribute("type", "submit");

  listForm.append(listLabel, listInput, tasksListLabel, tasksList, submitButton);
  return listForm;
}

listForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  submitListForm(formData);
  refreshListItems();
});

export default createListForm;
