import {
  getTodoObjects,
  getListObjects,
} from "../../objectsComponents/centralObjectsStorage.js";
import { main } from "../../universalQueries.js";
import {
  refreshAllLists,
  refreshListItems,
} from "../sidebarComponent/sidebarRefreshComponents.js";
import checkReturnedObject from "../../checkers/checkReturnedObject.js";
import { setLabelAttributes } from "../toggleAttribute.js";
import removeAllChildNodes from "../removeChildren.js";
import elementsCreate from "../elementsCreator.js";

// List elements
const listOptionsSection = document.createElement("section");
const listH1 = document.createElement("h1");
const listForm = document.createElement("form");
const listLabel = document.createElement("label");
const listInput = document.createElement("input");
const listSave = document.createElement("button");
const allListItems = getListObjects();
let passedList;

// Task elements
const taskOptionsSection = document.createElement("section");
const taskH1 = document.createElement("h1");
const taskForm = document.createElement("form");
const taskLabel = elementsCreate("label", 5);
const taskInput = elementsCreate("input", 4);
const taskSelect = document.createElement("select");
const taskOptions = elementsCreate("option", 3);
const taskSave = document.createElement("button");
const allTaskItems = getTodoObjects();
let passedTask;

function renderListOptions(id) {
  const taskSection = document.querySelector("#task-options");
  if (taskSection) {
    taskSection.remove();
  }
  listOptionsSection.id = "list-options";
  passedList = checkReturnedObject(id, "list");
  listH1.textContent = "List Options";
  setLabelAttributes(listLabel, "Change Name", "list-name");
  listInput.value = `${passedList.Name}`;
  listInput.name = "list-name";
  listInput.setAttribute("id", "list-name");
  listSave.textContent = "Save";
  listSave.setAttribute("type", "submit");
  listForm.append(listLabel, listInput, listSave);
  listOptionsSection.append(listH1, listForm);
  main.append(listOptionsSection);
}

listForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  passedList.setName = formData.get("list-name");
  removeAllChildNodes(listOptionsSection);
  refreshListItems();
});

function renderTaskOptions(id) {
  const listSection = document.querySelector("#list-options");
  if (listSection) {
    listSection.remove();
  }
  taskOptionsSection.id = "task-options";
  passedTask = checkReturnedObject(id, "todo");
  taskH1.textContent = "Task Options";
  setLabelAttributes(taskLabel[0], "Title", "task-title");
  setLabelAttributes(taskLabel[1], "Description", "task-description");
  setLabelAttributes(taskLabel[2], "Due Date", "task-duedate");
  setLabelAttributes(taskLabel[3], "Priority", "task-priority");
  setLabelAttributes(taskLabel[4], "Notes", "task-notes");

  taskInput[0].value = `${passedTask.Title}`;
  taskInput[1].value = `${passedTask.Description}`;
  taskInput[2].value = `${passedTask.DueDate}`;
  taskInput[3].value = `${passedTask.Notes}`;

  taskInput[0].setAttribute("id", "task-title");
  taskInput[1].setAttribute("id", "task-description");
  taskInput[2].setAttribute("id", "task-duedate");
  taskInput[2].setAttribute("type", "date");
  taskInput[3].setAttribute("id", "task-notes");
  taskInput[0].setAttribute("name", "title");
  taskInput[1].setAttribute("name", "description");
  taskInput[2].setAttribute("name", "duedate");
  taskInput[3].setAttribute("name", "notes");

  const selectDefault = passedTask.Priority;
  console.log(selectDefault);
  taskSelect.name = "priority";
  taskSelect.id = "priority";
  taskOptions[0].setAttribute("value", "low");
  taskOptions[0].textContent = "Low";
  taskOptions[1].setAttribute("value", "medium");
  taskOptions[1].textContent = "Medium";
  taskOptions[2].setAttribute("value", "high");
  taskOptions[2].textContent = "High";

  for (let i = 0; i < taskOptions.length; i++) {
    taskSelect.append(taskOptions[i]);
    if (taskOptions[i].value === selectDefault) {
      taskOptions[i].selected = true;
    }
  }
  taskSave.textContent = "Save";
  taskSave.setAttribute("type", "submit");
  for (let i = 0; i < 3; i++) {
    taskForm.append(taskLabel[i], taskInput[i]);
  }
  taskForm.append(
    taskLabel[3],
    taskSelect,
    taskLabel[4],
    taskInput[3],
    taskSave,
  );
  taskOptionsSection.append(taskH1, taskForm);
  main.append(taskOptionsSection);
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const transformedForm = Object.fromEntries(formData);
  passedTask.setTitle = transformedForm.title;
  passedTask.setDescription = transformedForm.description;
  passedTask.setDueDate = transformedForm.duedate;
  passedTask.setPriority = transformedForm.priority;
  passedTask.setNotes = transformedForm.notes;

  removeAllChildNodes(taskOptionsSection);
  refreshListItems();
});

export { renderListOptions, renderTaskOptions };
