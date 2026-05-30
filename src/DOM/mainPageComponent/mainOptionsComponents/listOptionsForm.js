import checkObjectOccurrence from "../../../checkers/checkObjectOccurrence.js";
import checkReturnedObject from "../../../checkers/checkReturnedObject.js";
import {
  deleteObject,
  getListObjects,
} from "../../../objectsComponents/centralObjectsStorage.js";
import elementsCreate from "../../elementsCreator.js";
import removeAllChildNodes from "../../removeChildren.js";
import {
  refreshListItems,
  refreshListsAddTasks,
  refreshListsRemovedTasks,
} from "../../sidebarComponent/sidebarRefreshComponents.js";
import { setLabelAttributes } from "../../toggleAttribute.js";
import {
  addSelectedTasks,
  removeSelectedTasks,
  renderListsRemovedTasks,
  renderTaskOptions,
} from "./mainOptionsPage.js";

let passedList;

function createListOptionsForm(id) {
  const listForm = document.createElement("form");
  listForm.id = "options-form";
  const listLabel = document.createElement("label");
  const listInput = document.createElement("input");
  const listSave = document.createElement("button");
  const tasksTitle = document.createElement("h3");
  const addTasksTitle = document.createElement("h3");
  tasksTitle.textContent = "Remove Tasks";
  addTasksTitle.textContent = "Add Tasks";
  tasksTitle.classList.add("dialogs-h3");
  addTasksTitle.classList.add("dialogs-h3");
  const listTasksContainer = document.createElement("div");
  const addTasksContainer = document.createElement("div");
  listTasksContainer.classList.add("dialogs-list");
  addTasksContainer.classList.add("dialogs-list");
  passedList = checkReturnedObject(id, "list");
  setLabelAttributes(listLabel, "Name", "list-name");
  listInput.value = `${passedList.Name}`;
  if (
    passedList.Name === "Default" ||
    passedList.Name === "Today" ||
    passedList.Name === "This Week" ||
    passedList.Name === "Completed"
  ) {
    listInput.disabled = true;
  }
  listInput.name = "list-name";
  listInput.id = "list-name";
  listTasksContainer.id = "list-items";
  addTasksContainer.id = "added-list-items";
  listSave.textContent = "Save";
  listSave.setAttribute("type", "submit");
  listForm.append(
    listLabel,
    listInput,
    tasksTitle,
    listTasksContainer,
    addTasksTitle,
    addTasksContainer,
    listSave,
  );

  activateEventListener(listForm);
  return listForm;
}

function activateEventListener(listForm) {
  listForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskItems = getListObjects();
    const formData = new FormData(e.target);
    if (!taskItems[0] || !taskItems[1] || !taskItems[2] || !taskItems[3]) {
      passedList.setName = formData.get("list-name");
    }
    if (formData.getAll("task")) {
      const allSelectedTasks = formData.getAll("task");
      removeSelectedTasks(passedList, allSelectedTasks);
      refreshListsRemovedTasks(passedList.id);
    }
    if (formData.getAll("add-task")) {
      const allSelectedTasks = formData.getAll("add-task");
      addSelectedTasks(passedList, allSelectedTasks);
      refreshListsAddTasks(passedList.id);
    }
    refreshListItems();
  });
}

export default createListOptionsForm;
