import {
  mainDiv,
  mainInput,
  mainLabel,
  mainOptions,
} from "./createTaskElements.js";
import { multiToggleAttribute, setLabelAttributes } from "./toggleAttribute.js";
import { main } from "../../universalQueries.js";
import { taskDialog } from "./createTaskDialog.js";

const todoForm = document.createElement("form");
const todoSelect = document.createElement("select");
const submitForm = document.createElement("button");
const clearForm = document.createElement("button");

function createTaskForm() {
  todoForm.setAttribute("method", "dialog");

  // Main labels
  setLabelAttributes(mainLabel[0], "Title", "title");
  setLabelAttributes(mainLabel[1], "Description", "description");
  setLabelAttributes(mainLabel[2], "Notes", "notes");
  setLabelAttributes(mainLabel[3], "Due Date", "due-date");
  setLabelAttributes(mainLabel[4], "Priority", "priority");

  // 3 repeated input types
  for (let i = 0; i < 3; i++) {
    mainInput[i].setAttribute("type", "text");
    todoForm.append(mainLabel[i], mainInput[i]);
  }

  // Date input type
  mainInput[3].setAttribute("type", "date");
  todoForm.append(mainLabel[3], mainInput[3]);

  // Options input
  todoSelect.setAttribute("id", "priority");
  todoSelect.setAttribute("name", "priority");
  mainOptions[0].setAttribute("value", "low");
  mainOptions[1].setAttribute("value", "medium");
  mainOptions[2].setAttribute("value", "high");
  mainOptions[0].textContent = "Low";
  mainOptions[1].textContent = "Medium";
  mainOptions[2].textContent = "High";
  for (let i = 0; i < 3; i++) {
    todoSelect.append(mainOptions[i]);
  }
  todoForm.append(mainLabel[4], todoSelect);

  // Each input id
  mainInput[0].setAttribute("id", "title");
  mainInput[1].setAttribute("id", "description");
  mainInput[2].setAttribute("id", "notes");
  mainInput[3].setAttribute("id", "due-date");
  for (let i = 0; i < 4; i++) {
    if (!(i === 1) && !(i === 2)) {
      multiToggleAttribute(mainInput[i], "required");
    }
  }

  // Submit button and form actions
  submitForm.textContent = "Create Task";
  submitForm.setAttribute("type", "submit");
  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  // Clear Button
  clearForm.textContent = "Clear";
  clearForm.setAttribute("type", "reset");

  // Set ids
  todoForm.id = "task-form";

  todoForm.append(submitForm, clearForm);
  return todoForm;
}

export default createTaskForm;
