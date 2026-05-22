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
  refreshListsRemovedTasks,
} from "../../sidebarComponent/sidebarRefreshComponents.js";
import { setLabelAttributes } from "../../toggleAttribute.js";
import {
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
  tasksTitle.textContent = "Remove Tasks";
  const listTasksContainer = document.createElement("div");
  passedList = checkReturnedObject(id, "list");
  setLabelAttributes(listLabel, "Name", "list-name");
  listInput.value = `${passedList.Name}`;
  if (
    passedList.Name === "Default" ||
    passedList.Name === "Today" ||
    passedList.Name === "This Week"
  ) {
    listInput.disabled = true;
  }
  listInput.name = "list-name";
  listInput.id = "list-name";
  listTasksContainer.id = "list-items";
  listSave.textContent = "Save";
  listSave.setAttribute("type", "submit");
  listForm.append(
    listLabel,
    listInput,
    tasksTitle,
    listTasksContainer,
    listSave,
  );

  activateEventListener(listForm);
  return listForm;
}

function activateEventListener(listForm) {
  listForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskItems = getListObjects();
    const defaultList = taskItems[0];
    const todaysList = taskItems[1];
    const weeksList = taskItems[2];
    const formData = new FormData(e.target);
    passedList.setName = formData.get("list-name");
    if (formData.getAll("task")) {
      const allSelectedTasks = formData.getAll("task");
      removeSelectedTasks(passedList, allSelectedTasks);
      refreshListsRemovedTasks(passedList.id);
    }
    refreshListItems();
  });
}

export default createListOptionsForm;
