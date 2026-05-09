import {
  mainDiv,
  mainInput,
  mainLabel,
  mainOptions,
} from "./createTaskElements.js";
import setLabelAttributes from "./setLabelAttribute.js";
import { main } from "../../universalQueries.js";

const todoForm = document.createElement("form");
const todoSubmit = document.createElement("button");
const todoSelect = document.createElement("select");

function appendCreateTaskForm() {
  // Main labels
  setLabelAttributes(mainLabel[0], "Title", "title");
  setLabelAttributes(mainLabel[1], "Description", "description");
  setLabelAttributes(mainLabel[2], "Notes", "notes");
  setLabelAttributes(mainLabel[3], "Due Date", "due-date");
  setLabelAttributes(mainLabel[4], "Priority", "priority");
  // 3 repeated input types
  for (let i = 0; i < 3; i++) {
    mainInput[i].setAttribute("type", "text");
    todoForm.append(mainLabel[i]);
    todoForm.append(mainInput[i]);
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

  // Submit button
  todoSubmit.textContent = "Create Task";
  todoSubmit.setAttribute("type", "submit");
  todoSubmit.setAttribute("form", "task-form");
  
  todoForm.id = "task-form";
  main.append(todoForm, todoSubmit);
}

export default appendCreateTaskForm;
