import { getTodoObjects } from "../../objectsComponents/centralObjectsStorage.js";
import elementsCreate from "../elementsCreator.js";
import { setLabelAttributes } from "../toggleAttribute.js";
import { createListObject, createTodoObject } from "../../objectsComponents/createObjects.js";
import { refreshListItems } from "../sidebarComponent/sidebarRefreshComponents.js";
import { submitListForm } from "../sidebarComponent/sidebarFormsSubmitter.js";

// Create needed elements
const listForm = document.createElement("form");
const listLabel = document.createElement("label");
const listInput = document.createElement("input");
const listDiv = document.createElement("div");
const submitButton = document.createElement("button");
const empty = document.createElement("p");

function createListForm() {
  // Form Properties
  listForm.setAttribute("method", "dialog");
  listForm.id = "list-form";

  // Label & Input properties
  setLabelAttributes(listLabel, "List Name", "name");
  listInput.id = "name";
  listInput.name = "name";
  listInput.setAttribute("autocomplete", "List");
  listInput.setAttribute("type", "text");
  listInput.toggleAttribute("required");

  // listDiv properties
  listDiv.setAttribute("id", "create-lists-div");

  // submitButton properties
  submitButton.textContent = "Create List";
  submitButton.setAttribute("type", "submit");

  listForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    submitListForm(formData);
    refreshListItems();
  });

  listForm.append(listLabel, listInput, listDiv, submitButton);
  return listForm;
}

export default createListForm;
