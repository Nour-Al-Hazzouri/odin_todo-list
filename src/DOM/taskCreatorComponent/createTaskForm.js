import { taskInput, taskLabel, taskOptions } from "./createTaskElements.js";
import { multiToggleAttribute, setLabelAttributes } from "../toggleAttribute.js";
import { task } from "../../universalQueries.js";
import { taskDialog } from "./createTaskDialog.js";
import { refreshTaskItems } from "../listCreatorComponent/refreshSidebarComponents.js";

const todoForm = document.createElement("form");
const todoSelect = document.createElement("select");
const submitForm = document.createElement("button");
const clearForm = document.createElement("button");

function createTaskForm() {
  todoForm.setAttribute("method", "dialog");

  // task labels
  setLabelAttributes(taskLabel[0], "Title", "title");
  setLabelAttributes(taskLabel[1], "Description", "description");
  setLabelAttributes(taskLabel[2], "Notes", "notes");
  setLabelAttributes(taskLabel[3], "Due Date", "due-date");
  setLabelAttributes(taskLabel[4], "Priority", "priority");

  // 3 repeated input types
  for (let i = 0; i < 3; i++) {
    taskInput[i].setAttribute("type", "text");
    todoForm.append(taskLabel[i], taskInput[i]);
  }

  // Date input type
  taskInput[3].setAttribute("type", "date");
  todoForm.append(taskLabel[3], taskInput[3]);

  // Options input
  todoSelect.setAttribute("id", "priority");
  todoSelect.setAttribute("name", "priority");
  taskOptions[0].setAttribute("value", "low");
  taskOptions[1].setAttribute("value", "medium");
  taskOptions[2].setAttribute("value", "high");
  taskOptions[0].textContent = "Low";
  taskOptions[1].textContent = "Medium";
  taskOptions[2].textContent = "High";
  for (let i = 0; i < 3; i++) {
    todoSelect.append(taskOptions[i]);
  }
  todoForm.append(taskLabel[4], todoSelect);

  // Each input id
  taskInput[0].setAttribute("id", "title");
  taskInput[1].setAttribute("id", "description");
  taskInput[2].setAttribute("id", "notes");
  taskInput[3].setAttribute("id", "due-date");
  for (let i = 0; i < 4; i++) {
    if (!(i === 1) && !(i === 2)) {
      multiToggleAttribute(taskInput[i], "required");
    }
  }

  // Submit button and form actions
  submitForm.textContent = "Create Task";
  submitForm.setAttribute("type", "submit");
  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    refreshTaskItems(); 
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
