import checkReturnedObject from "../../../checkers/checkReturnedObject.js";
import elementsCreate from "../../elementsCreator.js";
import { setLabelAttributes } from "../../toggleAttribute.js";
import { refreshListItems } from '../../sidebarComponent/sidebarRefreshComponents.js';

let passedTask;

function createTaskOptionsForm(id) {
  const taskForm = document.createElement("form");
  const taskLabel = elementsCreate("label", 5);
  const taskInput = elementsCreate("input", 4);
  const taskSelect = document.createElement("select");
  const taskOptions = elementsCreate("option", 3);
  const taskSave = document.createElement("button");

  passedTask = checkReturnedObject(id, "todo");
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
  activateEventListener(taskForm);
  return taskForm;
}

function activateEventListener(taskForm) {
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const transformedForm = Object.fromEntries(formData);
    console.log(passedTask);
    passedTask.setTitle = transformedForm.title;
    passedTask.setDescription = transformedForm.description;
    passedTask.setDueDate = transformedForm.duedate;
    passedTask.setPriority = transformedForm.priority;
    passedTask.setNotes = transformedForm.notes;
  });
}

export default createTaskOptionsForm;
