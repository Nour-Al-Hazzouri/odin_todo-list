import { taskInput, taskLabel, taskOptions } from "./createTaskElements.js";
import {
  multiToggleAttribute,
  setLabelAttributes,
} from "../toggleAttribute.js";
import { taskDialog } from "./createTaskDialog.js";
import {
  refreshListItems,
  refreshTaskItems,
  refreshCreateTaskItems,
} from "../sidebarComponent/sidebarRefreshComponents.js";
import { submitTaskForm } from "../sidebarComponent/sidebarFormsSubmitter.js";
import { getListObjects } from "../../objectsComponents/centralObjectsStorage.js";
import elementsCreate from "../elementsCreator.js";

const todoForm = document.createElement("form");

function createTaskForm() {
  const todoSelect = document.createElement("select");
  const submitForm = document.createElement("button");
  const clearForm = document.createElement("button");
  const listsContainer = document.createElement("div");
  listsContainer.id = "lists-container";
  todoForm.setAttribute("method", "dialog");

  // Tasks labels
  setLabelAttributes(taskLabel[0], "Title", "title");
  setLabelAttributes(taskLabel[1], "Description", "description");
  setLabelAttributes(taskLabel[2], "Notes", "notes");
  setLabelAttributes(taskLabel[3], "Due Date", "due-date");
  setLabelAttributes(taskLabel[4], "Priority", "priority");

  // Input types
  // Text
  for (let i = 0; i < 3; i++) {
    taskInput[i].setAttribute("type", "text");
    todoForm.append(taskLabel[i], taskInput[i]);
  }
  // Date
  taskInput[3].setAttribute("type", "date");
  todoForm.append(taskLabel[3], taskInput[3]);
  // Options
  todoSelect.setAttribute("id", "priority");
  todoSelect.setAttribute("name", "priority");
  taskOptions[0].setAttribute("value", "low");
  taskOptions[1].setAttribute("value", "medium");
  taskOptions[2].setAttribute("value", "high");
  taskOptions[0].textContent = "Low";
  taskOptions[1].textContent = "Medium";
  taskOptions[2].textContent = "High";
  // Each input properties
  taskInput[0].setAttribute("id", "title");
  taskInput[0].setAttribute("name", "title");
  taskInput[1].setAttribute("id", "description");
  taskInput[1].setAttribute("name", "description");
  taskInput[2].setAttribute("id", "notes");
  taskInput[2].setAttribute("name", "notes");
  taskInput[3].setAttribute("id", "due-date");
  taskInput[3].setAttribute("name", "duedate");
  for (let i = 0; i < 4; i++) {
    if (!(i === 1) && !(i === 2)) {
      multiToggleAttribute(taskInput[i], "required");
    }
  }

  submitForm.textContent = "Create Task";
  submitForm.setAttribute("type", "submit");
  clearForm.textContent = "Clear";
  clearForm.setAttribute("type", "reset");
  todoForm.id = "task-form";

  // Append elements accordingly
  for (let i = 0; i < 3; i++) {
    todoSelect.append(taskOptions[i]);
  }
  todoForm.append(
    taskLabel[4],
    todoSelect,
    listsContainer,
    submitForm,
    clearForm,
  );
  return todoForm;
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  submitTaskForm(formData);
});

export default createTaskForm;
